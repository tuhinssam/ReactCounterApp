import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters:[
            {id:1, value:4},
            {id:2, value:0},
            {id:3, value:0},
            {id:4, value:0}
        ]
     };

    handleDelete = () => {
        console.log('Event Handler Called');
    }

    render() { 
        return ( 
            <div>
                {this.state.counters.map(obj => 
                <Counter key={obj.id} value={obj.value} id={Counter.id} onDelete= {this.handleDelete}>
                    <h4>Counter #{obj.id}</h4>
                </Counter>)}
            </div>
         );
    }
}
 
export default Counters;