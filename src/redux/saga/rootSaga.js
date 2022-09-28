/** @format */
import { takeLatest } from "redux-saga/effects";
import { GET_DATA } from "../ducks/getData";
import { handleGetData } from "./handler/datahandler";

export function* watcherSaga() {
  yield takeLatest(GET_DATA, handleGetData);
}
