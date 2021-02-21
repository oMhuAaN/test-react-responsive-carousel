import { takeEvery, put } from 'redux-saga/effects';
import {
  SAGA_GET_INIT_LIST,
  SAGA_GET_INIT_LIST2
} from '../ActionTypes';
import { ActionSetInitList } from '../ActionCreators';

function* SagaGetInitList() {
  let url = '/api/list';
  try {
    let response = yield fetch(url);
    const data = yield response.json();
    const action = ActionSetInitList(data);
    yield put(action);
  } catch (error) {
    console.log('list.json 网络请求失败', error);
  }
}
function* SagaGetInitList2() {
  let url = '/api/list';
  try {
    let response = yield fetch(url);
    const data = yield response.json();
    const action = ActionSetInitList(data);
    yield put(action);
  } catch (error) {
    console.log('list.json 网络请求失败', error);
  }
}

function* Sagas() {
  yield takeEvery(SAGA_GET_INIT_LIST, SagaGetInitList);
  yield takeEvery(SAGA_GET_INIT_LIST2, SagaGetInitList2);
}

export default Sagas;