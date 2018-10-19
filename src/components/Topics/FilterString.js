import React, {Component} from 'react'

class FilterString extends Component {
    constructor(){
        super()

        this.state = {
            unFilteredArray: ['Cooper', 'Kelley', 'Taylor', 'Montgomery'],
            userInput: '',
            filterArray: []
        }
    }

    updateInput(e){
        let userInput = e.target.value
        this.setState({
            userInput: userInput
        })
    }

    solve(){
        let input = this.state.userInput
        let newArray = []
        for(let i = 0; i<this.state.unFilteredArray.length; i++){
            if(this.state.unFilteredArray[i].includes(input)){
                newArray.push(this.state.unFilteredArray[i])
            }
        }
        this.setState({
            filterArray: newArray
        })
    }


    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4> Filter String </h4>
                <span className="puzzleText"> Names:</span>
                <input className="inputLine" onChange={e => this.updateInput(e)}></input>
                <button className="confirmationButton" onClick={e => this.solve()}> Filter </button>
                <span className="resultsBox filterStringRB"> Filtered Names: {this.state.filterArray}</span>
            </div>
        )
    }
}

export default FilterString