import React, { Component } from 'react';

class FilterObject extends Component {
    constructor(){
        super()
        this.state = {
            unFilteredArray: [
                {name: 'Jon', age: 25},
                {firstName: 'Dave', age: 41},
                {name: 'Zach', age: 33},
                {firstName: 'Charles', age: 19},
                {name: 'Zoe', age: 99},
                {firstName: 'Sarah', age: 6},
                {name: 'Moses', age: 12},
                {firstName: 'Nephi', age: 66},
                {name: 'Simba', age: 14},
                {name: 'Ellen', age: 27}
              ],
            userInput: '',
            filteredArray: []
        }
    }
    
    filterArray(str){
         this.setState({filteredArray: this.state.unFilteredArray.filter(e => e[str])})
      }
    
    
    
    render(){
        console.log(this.state.userInput)
        return (
            <div className="puzzleBox filterObjectPB">
                <h4> Filter Object </h4>
                
                <span className="puzzleText"> Unfiltered: { JSON.stringify(this.state.unFilteredArray, null, 10) } </span>
                
                <input className="inputLine" 
                onChange={(e) => this.setState({userInput: e.target.value})}/>
                
                <button className="confirmationButton"
                onClick={(e) => this.filterArray(this.state.userInput)}>BUTTON</button>
                
                
                <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredArray, null, 10) } </span>
            </div>
        )
    }
}

export default FilterObject