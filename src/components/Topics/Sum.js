import React, { Component } from 'react';
class Sum extends Component {
    
    constructor(){
        super()
            this.state = {
                userInput: 0,
                userInput2: 0,
                sum: null
            }
    }
    
    summinSpecial(num1, num2){
        this.setState({ sum: num1 + num2 })
    }
    
    
    render(){
        console.log(this.state.sum)
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                
                <input className="inputLine" onChange={(e) => this.setState({userInput: parseInt(e.target.value, 10)})}/>
                
                <input className="inputLine" onChange={(v) => this.setState({userInput2: parseInt(v.target.value, 10)})}/>
                
                <button className="confirmationButton" onClick={(e) => this.summinSpecial(this.state.userInput, this.state.userInput2)}>BUTTON</button>
        
                <span className="resultsBox"> Result: {this.state.sum} </span>
            </div>
        )
        console.log(this.state.sum)
    }
}

export default Sum