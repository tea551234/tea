import React, { Component } from 'react';
import Counter from './counter.jsx'




class Counters extends Component {
    state = {}
    render() {
        return (
            <div>
                <Counter></Counter>
            </div>
        )
    }
}

export default Counters;