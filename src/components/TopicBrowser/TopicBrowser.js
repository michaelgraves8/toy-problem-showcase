// const { Component } = require("react")
import React, { Component } from 'react';
import EvenAndOdd from '../Topics/EvenAndOdd'
import FilteredObject from '../Topics/FilterObject'
import FilteredString from '../Topics/FilterString'
import Palindrome from '../Topics/Palindrome'
import Sum from '../Topics/Sum'

export default class TopicBrowser extends Component {
    render() {
        return (
            <div>
                <EvenAndOdd />
                <FilteredObject />
                <FilteredString />
                <Palindrome />
                <Sum />
            </div>
        )
    }
}