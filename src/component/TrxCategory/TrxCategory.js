import React,{Component} from 'react';

export default class TrxCategory extends Component{
    renderCategory() {
        const { reasonID,categoryArray } = this.props
        console.log(this.props.categoryArray);
        switch (reasonID) {
            case 123:
                return <Component />
            default: 
                return <span> Test data </span>;
        }
    }

    render () {
        return(
            <div>
                { this.renderCategory()  }
            </div>
        )
    }
}