import React, {Component} from 'react'

class FilterString extends Component {
    constructor(){
        super()
            this.state = {
                unFilteredArray: [
                    "let there be light",
                    "light is lightest just before the dark",
                    "eat a sandwich",
                    "tread lightly",
                    "ketchup and mustard on my sandwich",
                    "sunlight sandwich"
                ],
                userInput: '',
                filteredArray: []
            }
    }


    filterStr(str){
        this.setState({filteredArray: this.state.unFilteredArray.filter(e => e.includes(str))})
      }

    render() {
        return(
            <div className="puzzleBox filterStringPB">
                
                <h4>Filter String</h4>
                
            <span className="puzzleText"> Unfiltered: { JSON.stringify(this.state.unFilteredArray, null, 10) } </span>
                
                <input className="inputLine" 
                onChange={(e) => this.setState({userInput: e.target.value})}/>
                
                <button className="confirmationButton" 
                onClick={(e) => this.filterStr(this.state.userInput)}>BUTTON</button>
                
        <span className="resultsBox filterStringRB"> Filtered: { JSON.stringify(this.state.filteredArray, null, 10) }</span>

            </div>
        )}
}

export default FilterString