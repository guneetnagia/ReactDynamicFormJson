import React from 'react'
import './Home.css'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      leftPaneOptions: [],
      activeSelection: '',
      rightPaneQuestionsSections: []
    }

    // bind events
    this.handleSelectOnChange = this.handleSelectOnChange.bind(this)
  }

  handleSelectOnChange(e) {
    const { trxCategory } = this.props.data
    const { value: selectedId } = e.target

    console.log(trxCategory[selectedId])
    
    this.setState({
      leftPaneOptions: trxCategory[selectedId],
      activeSelection: selectedId
    })
    
    this.setQuestionsForSelectedTab(trxCategory[selectedId])
  }

  // TODO optimise. dont break references.
  setQuestionsForSelectedTab(leftPaneOptions) {
    const { questions } = this.props.data
    const questionsForSection = leftPaneOptions

    // add question list array; map
    questionsForSection.forEach((item, idx) => {
      item['questionList'] = []
    })

    // put questions in array
    questionsForSection.forEach((item, idx) => {
      const questionsForThisSection = questions[item.id] // this is what we're getting directly from your JSON
      item.questionList = questionsForThisSection
    })

    this.setState({
      rightPaneQuestionsSections: questionsForSection
    })
  }

  renderLeftPane() {
    return(
      <div>
        { this.state.leftPaneOptions.map((item, idx) => {
          return <ul key={idx} onClick={this.handleTabClick}>{item.topic_label}</ul>
        }) }
      </div>
    )
  }

  renderRightPane() {
    const { rightPaneQuestionsSections } = this.state
    console.log(rightPaneQuestionsSections)

    return (
      rightPaneQuestionsSections.map((item, idx) => {
        return (
          <div key={idx}>
            <h3>{ item.topic_label }</h3>
            <div>
              { item.questionList.map((item, idx) => {
                return (
                  <div key={idx}>
                    { item.label }
                  </div>
                )
              }) }
            </div>
          </div>
        )
      })
    )
  }

  render() {
    console.log(this.props.data)
    const { reasonOfSubmission } = this.props.data
    return (
      <div>
        <select onChange={this.handleSelectOnChange}>
          { reasonOfSubmission.map((item, idx) => {
            return <option key={idx} value={item.id}>{ item.label }</option>
          }) }
        </select>
        <div className='main-body'>
          <div className='left-pane tab-items'>
            { !!this.state.leftPaneOptions.length && this.renderLeftPane() }
          </div>
          <div className='right-pane'>
            { !!this.state.rightPaneQuestionsSections.length && this.renderRightPane()}
          </div>
        </div>
      </div>
    )
  }
}