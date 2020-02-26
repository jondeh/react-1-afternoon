import React, { Component } from 'react';
import EvenAndOdd from '../../components/Topics/EvenAndOdd'
import FilterObject from '../../components/Topics/FilterObject'
import Sum from '../../components/Topics/Sum'
import Palindrome from '../../components/Topics/Palindrome'
import FilterString from '../../components/Topics/FilterString'



class TopicBrowser extends Component {
    
    
    render (){
        return (
            <div>
                <p> Hello world! </p>
                <EvenAndOdd />
                <FilterObject />
                <FilterString/>
                <Palindrome />
                <Sum />
            </div>
        )
    }

}                     


export default TopicBrowser;