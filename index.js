import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Navebar  from '.../src/components/layout';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'testing'
    };
  }
   
  render() {
    return (
      <div>
      <Navebar />
        <Hello name={this.state.name.toUpperCase()} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
