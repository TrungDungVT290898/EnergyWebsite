import { all } from 'redux-saga/effects';
import dashboardSaga from '../features/dashboard/dashboardSaga';

export default function* rootSaga() {
  yield all([dashboardSaga()]);
}
