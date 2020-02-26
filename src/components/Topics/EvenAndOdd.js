import React, { Component } from 'react'

class EvenAndOdd extends Component {
    
    constructor(){
        super()
            this.state = {
                evenArray: [],
                oddArray: [],
                userInput: ''
            }
    }
    
    evenAndOdd(str){
        let newArr = str.split(',').map(e => Number(e))
        let evenArray = newArr.filter(e => e % 2 === 0)
        let oddArray = newArr.filter(e => e % 2 === 1)
        this.setState({evenArray, oddArray})
      }
    
    
    
    
    render(){
        console.log(this.state.userInput)
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" 
                onChange={(e) => this.setState({userInput: e.target.value})}/>
                <button className="confirmationButton" 
                onClick={(e) => this.evenAndOdd(this.state.userInput)}
                >BUTTON</button>

                <span className="resultsBox">Even: {this.state.evenArray}</span>
                <span className="resultsBox">Odd: {this.state.oddArray}</span>

            </div>
        )
    }
}

export default EvenAndOdd