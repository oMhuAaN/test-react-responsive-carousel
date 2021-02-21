import {
  ACTION_SET_INPUT_VALUE,
  ACTION_ADD_TODO_ITEM,
  ACTION_DELETE_TODO_ITEM,
  ACTION_SET_INIT_LIST,

  SAGA_GET_INIT_LIST,
  SAGA_GET_INIT_LIST2
} from "../ActionTypes";

export const ActionSetInputValue = (value) => ({
  type: ACTION_SET_INPUT_VALUE,
  value
})

export const ActionAddTodoItem = () => ({
  type: ACTION_ADD_TODO_ITEM
})

export const ActionDeleteTodoItem = (index) => ({
  type: ACTION_DELETE_TODO_ITEM,
  index
})

export const ActionSetInitList = (list) => ({
  type: ACTION_SET_INIT_LIST,
  list
})


export const SagaGetInitList = () => ({
  type: SAGA_GET_INIT_LIST
})

export const SagaGetInitList2 = () => ({
  type: SAGA_GET_INIT_LIST2
})




