import { takeLatest, all, call, put } from 'redux-saga/effects';
import { dashboardActions } from './dashboardSlice';

// function* fetchStatistic() {
//   const responseList: ListResponse<Student>[] = yield all([
//     call(studentAPI.getAll, {
//       _page: 1,
//       _limit: 1,
//       gender: 'male',
//     }),
//     call(studentAPI.getAll, { _page: 1, _limit: 1, gender: 'female' }),
//     call(studentAPI.getAll, { _page: 1, _limit: 1, mark_gte: 8 }),
//     call(studentAPI.getAll, { _page: 1, _limit: 1, mark_lte: 5 }),
//   ]);

//   const statisticsList = responseList.map((x) => {
//     return x.pagination._totalRows;
//   });
//   const [maleCount, femaleCount, highMarkCount, lowMarkCount] = statisticsList;
//   yield put(
//     dashboardActions.setStatistics({
//       maleCount,
//       femaleCount,
//       highMarkCount,
//       lowMarkCount,
//     }),
//   );
// }

// function* fetchDashboardData() {
//   try {
//     yield all([
//       call(fetchStatistic)
//     ]);
//     yield put(dashboardActions.fetchDataSuccess());
//   } catch (error) {
//     yield put(dashboardActions.fetchDataFail());
//   }
// }
export default function* dashboardSaga() {
  // yield takeLatest(dashboardActions.fetchData.type, fetchDashboardData);
}
