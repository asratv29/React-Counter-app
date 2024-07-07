import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return (
                <div> 
                   <h5>Counter # {this.props.counter.id}</h5>
                   
                   <div className={ this.getBadgeClasses() }>{this.stateCount() }</div>
                 
                   <button 
                        onClick={ () => this.props.onIncrement(this.props.counter)} 
                        className='btn btn-secondary btn-sm'>
                            Increment
                    </button>
                 
                    <button
                        onClick={ () => this.props.onReset(this.props.counter)} 
                        className="btn btn-success btn-sm m-2 p-1">
                            Reset
                    </button>
                   <button
                        onClick={ () => this.props.onDelete(this.props.counter.id) } 
                        className="btn btn-danger btn-sm p-1 m-2">
                            Delete
                   </button>
                </div>
            );
    }



    getBadgeClasses() {
        let classes = "m-4 p-2 badge badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    stateCount() {
        const value = this.props.counter.value;
        return value === 0 ? 0 : value;
    }

    


}

export default Counter;