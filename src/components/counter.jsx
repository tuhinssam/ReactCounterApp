import React, { Component } from 'react';
class Counter extends Component {
    state = { 
        count: this.props.value,
        imageUrl: 'https://picsum.photos/200',
        tags: []
     }

    // constructor()
    // {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // } 

    render() { 
        console.log("props",this.props);

        return (
        <React.Fragment>
            {this.props.children}
            <a href="#" className={this.getBadgeClasses()} tabindex="-1" role="button" aria-disabled="true">{this.formatCount()}</a>
            <span>&nbsp;&nbsp;</span>
            <button 
            onClick={(product) => this.handleIncrement()} 
            className="ben btn-primary btn-sm m-2">
                Increment
            </button> 
            <span>&nbsp;&nbsp;</span>
            <button 
            onClick = {() => this.props.onDelete(this.props.id)}
            className="ben btn-danger btn-sm m-2">
                Delete
            </button>
            <br/><br/>
        </React.Fragment>
        );
    }

    handleIncrement = product => {
        console.log(product);
        this.setState({count : this.state.count + 1})
    }

    renderTags()
    {
        if (this.state.tags.length === 0)
           return <p>No tags to render</p>;
        return this.state.tags.map(obj => <li key={obj}>{obj}</li>);
    }

    getBadgeClasses() {
        let classes = "btn-sm disabled btn btn-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {count} = this.state;
        return count === 0 ? 'Zero':count;
    }
}
 
export default Counter;