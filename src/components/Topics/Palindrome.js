import React, { Component } from 'react'

class Palindrome extends Component {
    
    constructor(){
        super()
            this.state = {
                userInput: '',
                palindrome: ''
            }
    }
    
    palindrome(str){
            if(str.split('').reverse().join('') === str){
              this.setState({palindrome: "true"})
            }
            else {
                this.setState({palindrome: "false"}) 
            }
          }
        
    render(){
        console.log(this.state.userInput)
        return (
            <div className="puzzleBox filterStringPB">
                
                <h4>Palindrome</h4>
                
                <input className="inputLine" 
                onChange={(e) => this.setState({userInput: e.target.value})}/>
                
                <button className="confirmationButton" onClick={(e) => this.palindrome(this.state.userInput)}> BUTTON </button>
                
                <span className="resultsBox"> Palindrome: {this.state.palindrome} </span>
                

            </div>
        )
    }
}

export default Palindrome