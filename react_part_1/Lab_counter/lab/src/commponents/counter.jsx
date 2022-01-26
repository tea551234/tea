import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count: 0,
    }
    styles = {
        fontSize: '16px',
        fontWeight: "bold"
    }
    render() {
        return (
            <div>
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.okbtn} className='btn btn-outline-success btn-sm'>按我!!!!</button>
            </div>
        );
    }

    okbtn = () => {
        // this.state.count += 1;
        // this.setState({})

        // this.setState( { count: ++this.state.count  } )

        let newState = { ...this.state }
        newState.count += 1;
        this.setState(newState)
    }




    getBadgeClasses() {
        var classes = "badge m-2 badge-";
        classes += this.state.count == 0 ? "warning" : "primary";
        return classes;
    }
    formatCount() {
        const { count } = this.state;
        return (count == 0) ? "Zero" : count;
    }


    getTage() {
        return this.state.tage.length === 0 ? "87" : "哭阿"
    }
}




export default Counter;