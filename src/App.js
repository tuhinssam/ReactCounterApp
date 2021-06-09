import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/navbar";
import reactDom from 'react-dom';
import Counters from './components/counters'

class App extends Component {
  state = { 
    counters:[
        {id: 1, value: 4},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0}
    ]
 };

 constructor(){
   super();
   console.log('App Constructor called');
 }

 componentDidMount()
 {
   console.log('App Mount called');
 }

handleIncrement = (counter) => {
    console.log('event handler handleIncrement called',counter)
    const counters = [...this.state.counters]; //cloning counters
    const index = counters.indexOf(counter);
    counters[index] = {...counter}; //cloning counter
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
    this.setState({counters}); //set the state after resetting values to zero
};
  render() { 
    console.log('App Render called');
    return ( 
      <React.Fragment>
        <NavBar totalCounters = {this.state.counters.filter(c => c.value > 0).length}/>
        <main className="Container">
          <Counters
            counters = {this.state.counters}
            onReset = {this.handleReset}
            onIncrement = {this.handleIncrement}
            onDelete = {this.handleDelete}
          />
        </main>
      </React.Fragment> 
     );
  }
}

export default App;
