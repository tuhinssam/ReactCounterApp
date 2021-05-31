import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Counter /><br/><br/>
                <Counter /><br/><br/>
                <Counter /><br/><br/>
                <Counter /><br/><br/>
                <Counter />
            </div>
         );
    }
}
 
export default Counters;