import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count: 0
    }
    styleList = {
        fontSize : '100px',
        fontWeight : 'bold'
    }

    render() {

        return (
            <div>
                <span style={this.styleList}> {this.formatCount()} </span>
                <button className='btnCounter'> 按我 </button>
            </div>
        )
    }

formatCount(){
    // return "ok"
    const{ count } = this.state;
    return count === 0 ? '0' : count;
}


}


export default Counter;