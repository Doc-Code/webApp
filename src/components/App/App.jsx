import React, { Component, PropTypes } from 'react';
import { Provider } from 'mobx-react';
import { extendObservable } from 'mobx';
import { observer }  from 'mobx-react';

import loginStore from '../../stores/loginStore';
const stores = { loginStore };

const propTypes = {
  children: PropTypes.node
};


class App extends Component {
  constructor() {
    super();

    extendObservable(this, {
      counter: 0
    });
  }
  onIncrement = () => {
    this.counter++;
  };

  onDecrement = () => {
    this.counter--;
  };
  render() {
    return (<Provider {...stores}>

      <div>
        {this.props.children}
        {this.counter}
        <button onClick={this.onIncrement} type='button'>Increment</button>
        <button onClick={this.onDecrement} type='button'>Decrement</button>
      </div>
    </Provider>);
  }
  }


App.propTypes = propTypes;
export default observer(App);
