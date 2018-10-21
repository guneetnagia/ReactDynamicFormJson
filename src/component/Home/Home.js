import React, { Component } from 'react';
import TrxCategory from '../TrxCategory/TrxCategory';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reasonValue: '(Mandatory)',
      selectedReasonId: null,
      category: []
    }
    this.renderSubmissionReason = this.renderSubmissionReason.bind(this);
    this.handleSubReasonChange = this.handleSubReasonChange.bind(this);
  }

  renderSubmissionReason() {
    const { trxData } = this.props;
    const { reasonOfSubmission } = trxData;
    return (
      <select
        value={this.state.reasonValue}
        onChange={this.handleSubReasonChange}>
        {reasonOfSubmission.map((options, idx) =>
          <option data-id={options.id} key={options.id}>{options.label}</option>
        )}
      </select>
    )
  }

  handleSubReasonChange(e) {
    var index = e.target.selectedIndex;
    var optionElement = e.target.childNodes[index]
    var selectedReason = optionElement.getAttribute('data-id');
    const { trxCategory } = this.props.trxData;
   
    this.setState({
      reasonValue: e.target.value,
      selectedReasonId: selectedReason,
      category: trxCategory[this.state.selectedReasonId]
    });
    
    switch (selectedReason) {
      case '31382fed-1aea-4392-88e8-bf937e70e979': {
        console.log('Conflict Clearance Request' + this.state.category);
        return <TrxCategory reasonID={this.state.selectedReasonId} categoryArray={this.state.category} />
      }
      case '3637f056-bcce-4150-ac9f-3a3df6857e79': {
        console.log('Capital Markets Notification' + this.state.category);
        return <TrxCategory reasonID={this.state.selectedReasonId} categoryArray={this.state.category} />
      }
      case '9dd3e519-61fa-4572-9c1e-68619b985e6b': {
        console.log('Move to LMU' + this.state.category);
        return <TrxCategory reasonID={this.state.selectedReasonId} categoryArray={this.state.category} />
      }
      case '337c49e9-3513-4e84-80e9-5a21dcc2828c': {
        console.log('Reciept of MNPI');
        return <TrxCategory reasonID={this.state.selectedReasonId} categoryArray={this.state.category} />
      }
      case 'a4622df4-3f7b-470d-bf39-2ecf4760bdcb': {
        console.log('Portfolio Management Request');
        return <TrxCategory reasonID={this.state.selectedReasonId} categoryArray={this.state.category} />
      }
      case 'e099480a-72a5-4b6b-b8f7-7127197b6055': {
        console.log('Principal Investment Request');
        return <TrxCategory reasonID={this.state.selectedReasonId} categoryArray={this.state.category} />
      }
      case '841a2ce8-3103-4d42-970b-117c1f372632': {
        console.log('HSBC Group M&A');
        return <TrxCategory reasonID={this.state.selectedReasonId} categoryArray={this.state.category} />
      }
      case '96ad3fd5-0c7b-406c-a4c4-e6462ce6af22': {
        console.log('Strategic Innovation and Investments');
        return <TrxCategory reasonID={this.state.selectedReasonId} categoryArray={this.state.category} />
      }
      case '5576704e-871f-4102-8738-bd02a58d4411': {
        console.log('(Mandatory)');
        return <TrxCategory reasonID={this.state.selectedReasonId} categoryArray={this.state.category} />
      }
      default:
        alert('Something went wrong')
    }

  }

  render() {
    return (
      <div className="App">
        <span className="form-data">Reason of Submission</span>
        <div className="drop-down">
          {this.renderSubmissionReason()}
        </div>
        
        {this.state.selectedReasonId && <TrxCategory reasonID={this.state.selectedReasonId} />}
      </div>
    );
  }
}

export default Home;