import React, { Component } from 'react';
import { PropTypes } from 'react'
class Counter extends Component {
    // state = { 
    //     count: this.props.counter.value,
    //     imageUrl: 'https://picsum.photos/200',
    //     tags: []
    //  }

    // constructor(props)
    // {
    //     super(props);
    //     this.onIncrement = this.props.onIncrement.bind(this.counter);
    // } 

    componentDidUpdate(prevProps, prevState)
    {
        console.log("Previous Props", prevProps);
        console.log("Previous states", prevState);
        if (prevProps.counter.value != this.props.counter.value)
        {
            //make ajax call and load data from server
            console.log('property value changed');
        }
    }

    componentWillUnmount()
    {
        console.log('Counter - unmount');
    }

    render() { 
        //console.log("props",this.props.counter);
        console.log('Counter Rendered');
        return (
        <React.Fragment>
            {/* {this.props.children} */}
            <span>&nbsp;&nbsp;</span>

            <a href="#" className={this.getBadgeClasses()} tabIndex="-1" role="button" aria-disabled="true">
                {this.formatCount()}
            </a>

            <span>&nbsp;&nbsp;</span>

            <button 
            onClick = {() => this.props.onIncrement(this.props.counter)}
            className="btn btn-primary btn-sm m-2">
                Increment
            </button>

            <span>&nbsp;&nbsp;</span>
            
            <button 
            onClick = {() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2">
                Delete
            </button>

            <br/>
        </React.Fragment>
        );
    }

    // handleIncrement = product => {
    //     //console.log(product);
    //     this.setState({count : this.state.count + 1})
    // }


    //using local state attributes
    renderTags()
    {
        if (this.state.tags.length === 0)
           return <p>No tags to render</p>;
        return this.state.tags.map(obj => <li key={obj}>{obj}</li>);
    }

    getBadgeClasses() {
        let classes = "btn-sm disabled btn btn-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value} = this.props.counter;
        return value === 0 ? 'Zero':value;
    }
}
 
export default Counter;