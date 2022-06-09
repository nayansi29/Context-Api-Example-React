import React, { Component } from 'react';
import User from './components/User';
import { Provider } from './components/MyContext';

export default class App extends Component {
  state = {
    name: 'Nancy',
    value: 10,
  }
  handleChange = () => {
    this.setState({ value: this.state.value + 1 });
  };
  render() {
    const ContextData = {
      data: this.state,
      handleChange: this.handleChange
    };
    return (
      <div>
        <Provider value={ContextData}>
          <User />
        </Provider>
      </div>
    )
  }
}
