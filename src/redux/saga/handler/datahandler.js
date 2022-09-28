/** @format */
import axios from "axios";
import { call, put } from "redux-saga/effects";
import { setData } from "../../ducks/getData";

export function* handleGetData(action) {
  try {
    console.log(action);
    const response = yield call(
      axios.get,
      `https://api.coincap.io/v2/assets?limit=${action.payload}`
    );
    console.log(response);
    const { data } = response;
    yield put(setData(data.data));
  } catch (error) {
    console.log(error);
  }
}
