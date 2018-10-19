import React, {Component} from 'react'

class EvenAndOdd extends Component {
    constructor(){
        super()

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    updateUserInput(e){
        let userInput = e.target.value
        this.setState({
            userInput: userInput
        })
    }

    solve(){
        let input = this.state.userInput.split(',')
        let newEvenArray = input.filter(elem => elem%2 === 0)
        let newOddArray = input.filter(elem => elem%2 !== 0)
        this.setState({
            evenArray: newEvenArray,
            oddArray: newOddArray
        })
    }

    render() {
        console.log(this.state.evenArray)
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={e => this.updateUserInput(e)} />
                <button className="confirmationButton" onClick={() => this.solve()}>Split</button>
                <span className="resultsBox">Evens: [{this.state.evenArray.join(',')}]</span>
                <span className="resultsBox">Odds: [{this.state.oddArray.join(',')}]</span>
            </div>
        )
    }
}

export default EvenAndOdd