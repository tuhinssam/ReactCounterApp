import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

    render() { 
        console.log('Counters rendered');
        return ( 
            <div>
                <button onClick={this.props.onReset} className="ben btn-primary btn-sm m-2">Reset</button>
                <br/>
                {this.props.counters.map(obj => 
                (<Counter 
                 key={obj.id} 
                 value={obj.value} 
                 id={obj.id} 
                 counter = {obj}
                 onDelete = {this.props.onDelete}
                 onIncrement = {this.props.onIncrement}>
                    <h4>Counter #{obj.id}</h4>
                </Counter>))}
            </div>
         );
    }
}
 
export default Counters;