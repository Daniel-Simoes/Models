import React, { Component } from 'react'

import { Provider } from 'react-redux'

import { store } from './redux/store'

import TodoList from './components/TodoList'

class App extends Component {

	render() {
		return (
			<Provider store={ store }>
				<div className="container">
					<TodoList/>
				</div>
			</Provider>
		)
	}

}

export default App
