import React, {Component} from 'react'

class Sum extends Component {
    constructor(){
        super()

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    updateInput1(e){
        let userInput = e.target.value
        this.setState({
            number1: userInput
        })
    }

    updateInput2(e){
        let userInput = e.target.value
        this.setState({
            number2: userInput
        })
    }

    solve(){
        let input1 = this.state.number1
        let input2 = this.state.number2
        this.setState({
            sum: +input1 + +input2
        }) 
        

       
    }
    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={e => this.updateInput1(e)}></input>
                <input className="inputLine" onChange={e => this.updateInput2(e)}></input>
                <button className="confirmationButton" onClick={e => this.solve()}> Add </button>
                <span className="resultsBox filterStringRB">Sum: {this.state.sum}</span>
            </div>
        )
    }
}

export default Sum