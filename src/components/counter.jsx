import React, { Component } from 'react';
class Counter extends Component {
    state = { 
        count: 1,
        imageUrl: 'https://picsum.photos/200'
     }

    render() { 

        return (
        <React.Fragment>
            <p className={this.getBadgeClasses()}>{this.formatCount()}</p>
            <button className="btn btn-primary btn-sm">Increment</button>
        </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "p-3 mb-2 text-whiite bg-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {count} = this.state;
        return count === 0 ? 'Zero':count;
    }
}
 
export default Counter;