import React from 'react';
import { connect } from "react-redux"

import { actions } from "../actions"

const Counter = ({ counter, increment, decrement }) => {
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <ul>
        <li><button onClick={decrement}>Descrement</button></li>
        <li><button onClick={increment}>Increment</button></li>
      </ul>
    </div>
  );
}

const mapStateToProps = state => ({
  counter: state.counterReducers.counter
})

const mapDispacthToProps = dispatch => ({
  decrement: () => dispatch(actions.decrement()),
  increment: () => dispatch(actions.increment()),
})

export default connect(mapStateToProps, mapDispacthToProps)(Counter);