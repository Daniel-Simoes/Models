import thunk from "redux-thunk"

import { createStore, applyMiddleware } from 'redux'


import {reducers} from './redurcers'


const store = createStore(reducers, applyMiddleware(thunk))



export { store }