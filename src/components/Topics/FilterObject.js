import React, {Component} from 'react'

class FilterObject extends Component {
    constructor() {
        super()

        this.state = {
            unFilteredArray: [
            {
                name: 'Cooper',
                age: 24
            },
            {
                name: 'Taylor',
                age: 26,
                hairColor: 'brown'
            }
        ],
            userInput: '',
            filteredArray: []
        }
    }

    updateInput(e){
        let userInput = e.target.value
        this.setState({
            userInput: userInput
        })
    }

    solveProblem(){
        let input = this.state.userInput
        let newArray = []
        for(let i = 0; i<this.state.unFilteredArray.length; i++){
            for(let key in this.state.unFilteredArray[i]){
                if(key === input){
                    newArray.push(this.state.unFilteredArray[i])
                }
            }
        }
        this.setState({
            filteredArray: newArray
        })
    }


    render() {
        let results = this.state.filteredArray.map(obj => {
            return <div>
                {obj.name}
            </div>
        })
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Filter Object</h4>
                <input className="inputLine" onChange={e => this.updateInput(e)}/>
                <button className="confirmationButton" onClick={e => this.solveProblem()}>Filter</button>
                <span className="resultsBox">Filtered: {results}</span>
            </div>
        )
    }
}

export default FilterObject