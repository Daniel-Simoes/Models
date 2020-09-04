import React from 'react';
import Counter from './screens';


import { Provider } from "react-redux"
import { store } from "./redux/store"


const App = () => (
  <Provider store={store}>
      <Counter />
  </Provider>
);

export default App