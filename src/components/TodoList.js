import React, { Component } from 'react'

import { connect } from 'react-redux'

import { todoActions } from '../redux/actions'

import { todoThunks } from '../redux/thunk'

import './TodoList.css'

class TodoList extends Component {

    state = {
        task: ''
    }
    componentDidMount() {
        const { getAll } = this.props
        getAll()
    }
    render() {
        const { tasks } = this.props
        const { task } = this.state
        return (
            <div className="todo">
                <form className="todo-form" onSubmit={ this.handleSubmit }>
                    <input className="todo-field" onChange={ this.handleChange } type="text" value={ task }/>
                    <button className="todo-btn" type="submit">Add</button>
                </form>
                <table className="todo-table">
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { tasks.map(task => (
                            <tr key={ task }>
                                <td>{ task }</td>
                                <td>
                                    <button className="todo-table-btn" onClick={ () => this.handleRemove(task) } type="button">Done</button>
                                </td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </div>
        )
    }

    handleChange = event => this.setState({ task: event.target.value })

    handleRemove = task => {
        const { remove } = this.props
        remove(task)
    }

    handleSubmit = event => {
        const { add } = this.props
        const { task } = this.state
        event.preventDefault()
        add(task)
        this.setState({ task : '' })
    }

}

const mapStateToProps = state => ({
    tasks: state.todoReducer.tasks
})

const mapDispatchToProps = dispatch => ({
    add: task => dispatch(todoActions.add(task)),
    getAll: () => dispatch(todoThunks.getAll()),
    remove: task => dispatch(todoActions.remove(task))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)