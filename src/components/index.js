import React from 'react';
import { useDispatch, useSelector } from "react-redux"

import { actions } from "../actions"

const Counter = () => {
const counter = useSelector(state => state.counterReducers.counter)
const dispatch = useDispatch()

const handleDecrement = () => dispatch(actions.decrement())
const handleIncrement = () => dispatch(actions.increment())

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <ul>
        <li><button onClick={handleDecrement}>Descrement</button></li>
        <li><button onClick={handleIncrement}>Increment</button></li>
      </ul>
    </div>
  );
}



export default Counter;