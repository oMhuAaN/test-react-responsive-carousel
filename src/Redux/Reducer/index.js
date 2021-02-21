import {
  ACTION_SET_INPUT_VALUE,
  ACTION_ADD_TODO_ITEM,
  ACTION_DELETE_TODO_ITEM,
  ACTION_SET_INIT_LIST
} from '../ActionTypes';

const defaultState = {
  inputValue: '',
  list: [],
};

const Reducer = (state = defaultState, action) => {
  if (action.type === ACTION_SET_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === ACTION_ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  if (action.type === ACTION_DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  if (action.type === ACTION_SET_INIT_LIST) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.list;
    return newState;
  }
  return state;
}

export default Reducer;