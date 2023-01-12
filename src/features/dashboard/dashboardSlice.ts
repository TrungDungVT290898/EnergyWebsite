import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Device } from '../../models';

export interface DashboardState {
  loading: boolean;
  device?: Device;
}
const initialState: DashboardState = {
  loading: false,
};
const dashboardSlice = createSlice({
  name: '/dashboard',
  initialState: initialState,
  reducers: {
    fetchData(state) {
      state.loading = true;
    },
    fetchDataSuccess(state) {
      state.loading = false;
    },
    fetchDataFail(state) {
      state.loading = false;
    },
    setDevice(state, action: PayloadAction<Device>) {
      state.device = action.payload;
    },
  },
});
// Actions
export const dashboardActions = dashboardSlice.actions;
// Selectors
export const selectDeviceLoading = (state: RootState) => state.dashboard.loading;
export const selectDevice = (state: RootState) => state.dashboard.device;
// Reducer
const dashboardReducer = dashboardSlice.reducer;

export default dashboardReducer;
