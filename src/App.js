import React, { Component } from "react";
import Store from './Redux/Store';
import { connect } from 'react-redux';
import {
  ActionSetInputValue,
  ActionAddTodoItem,
  ActionDeleteTodoItem,
  SagaGetInitList,
  SagaGetInitList2
} from './Redux/ActionCreators';
import AppUi from './AppUi';

class App extends Component {

  componentDidMount() {
    const action = SagaGetInitList();
    Store.dispatch(action);
    const action2 = SagaGetInitList2();
    Store.dispatch(action2);
  }

  render() {
    const { inputValue, handleInputChange, handleBtnClick, handleItemDelete, list } = this.props;
    return (
      <AppUi
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        handleBtnClick={handleBtnClick}
        handleItemDelete={handleItemDelete}
        list={list}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange: (e) => {
      const action = ActionSetInputValue(e.target.value)
      dispatch(action);
    },
    handleBtnClick: () => {
      const action = ActionAddTodoItem();
      dispatch(action);
    },
    handleItemDelete: (index) => {
      const action = ActionDeleteTodoItem(index);
      dispatch(action);
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
