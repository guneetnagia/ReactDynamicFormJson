import React,{Component} from 'react';
import trxState from '../jsons/trx.json';

class Questions extends Component{
    constructor(props){
        super(props);
        this.state={
            trxState:[]
        }
    }
    componentDidMount(){
        this.setState({
            trxState:this.state.trxState
        });
    }
    render(){
        let trxData = this.state.trxState.map((eachQuestion)=>{
            return(
                <tr key={eachQuestion.id}>
                    <td>{eachQuestion.label}</td>
                </tr>
            )
        });
        return(
            <div className="App">
                Something
            </div>
        );
    }
    
}

export default Questions;