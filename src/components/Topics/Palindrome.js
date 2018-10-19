import React, {Component} from 'react'

class Palindrome extends Component {
    constructor(){
        super()

        this.state = {
            userInput: '',
            palindrome: ''
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
        let trueOrFalse = ''
        if(input.split().reverse().join() === input) {
            trueOrFalse = 'True'
        } else {
            trueOrFalse = 'False'
        }

        this.setState({
            palindrome: trueOrFalse
        })
    }


    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <span className="puzzleText"> Names:</span>
                <input className="inputLine" onChange={e => this.updateInput(e)}></input>
                <button className="confirmationButton" onClick={e => this.solve()}> Filter </button>
                <span className="resultsBox filterStringRB">Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome