
import {ACTIONS} from "../redux/types"

const todoActions = {
  add: task => ({
      payload: task,
      type: ACTIONS.TODO_ADD
  }),
  getAll: tasks => ({
    payload: tasks,
    type: ACTIONS.TODO_GET_ALL
}),
  remove: task => ({
      payload: task,
      type: ACTIONS.TODO_REMOVE
  })
} 

export {todoActions}