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
    
    handleIncrement = (counter) => {
        console.log('event handler handleIncrement called',counter)
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
        console.log('after increment ',this.state.counters[0]);
    };

    handleDelete = (counterId) => {
        console.log('Event Handler handleDelete Called',counterId);
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters});
    };

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({counters});
    };

    render() { 
        return ( 
            <div>
                <button 
                 onClick={this.handleReset} 
                 className="ben btn-primary btn-sm m-2">Reset
                </button> 
                <br/><br/>
                {this.state.counters.map(obj => 
                <Counter 
                key={obj.id} 
                value={obj.value} 
                id={obj.id} 
                counter = {obj}
                onDelete= {this.handleDelete}
                onIncrement = {this.handleIncrement}>
                    <h4>Counter #{obj.id}</h4>
                </Counter>)}
            </div>
         );
    }
}
 
export default Counters;