import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import Counter from './components/counter'
import './App.css';
class App extends Component {
      state = {   
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 4},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
    } 

    onIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index].value++;

        this.setState({counters})

    }
    handleDelete = (counterID) => {
        const counters = this.state.counters.filter(c => c.id !== counterID);
        this.setState({counters});
    }

    onReset = () => {
        const counters = this.state.counters.map(
            c => {
                c.value = 0
                return c;
            }
        )
        this.setState({counters})
    }

    onResetCounter = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index].value = 0;
        this.setState({counters})
    }

      

  render() { 
    return (
      <div id="root">
        <NavBar />
        <main className="container">
        <Counters
          onDelete={this.handleDelete}
          onIncrement={this.onIncrement}
          onReset={this.onReset}
          onResetCounter={this.onResetCounter}
          selected
          counters={this.state.counters}
        /> 
        </main>
      </div>
    );
  }
}
 
export default App;