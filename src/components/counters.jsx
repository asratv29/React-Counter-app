import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    
    render() { 
        return (
            <div>
                <button 
                    onClick={this.props.onReset}
                    className="btn btn-primary btn-sm m-2 p-2">
                        Reset
                </button>
                
                { 
                    this.props.counters.map(counter => 
                            <Counter 
                                key={counter.id} 
                                value={counter.value} 
                                selected
                                onDelete={this.props.onDelete} 
                                onIncrement={this.props.onIncrement}
                                onReset={this.props.onResetCounter}
                                counter={counter}>                            
                            </Counter>
                        )
                }
            </div> 
        );
    }
}
 
export default Counters;