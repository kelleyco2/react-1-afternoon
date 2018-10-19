import React, {Component} from 'react'
import EvenAndOdd from '../Topics/EvenAndOdd'
import FilterString from '../Topics/FilterString'
import Palindrome from '../Topics/Palindrome'
import Sum from '../Topics/Sum'
import FilterObject from '../Topics/FilterObject'

class TopicBrowser extends Component {
    render() {
        return (
            <div>
                <EvenAndOdd/>
                <FilterString/>
                <Palindrome/>
                <Sum/>
                <FilterObject/>
            </div>
        )
    }
}

export default TopicBrowser