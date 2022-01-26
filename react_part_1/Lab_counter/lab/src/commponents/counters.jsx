import React, { Component } from 'react';
import Counter from './counter.jsx'




class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 2 },
            { id: 3, value: 3 },
            { id: 2, value: 4 },
        ]
    }
    render() {
        return (
            <div>
                {this.state.counters.map( c => <Counter key={c.id} ></Counter>  )}
            </div>
        )
    }
}

export default Counters;