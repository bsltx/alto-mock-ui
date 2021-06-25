import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'src/redux/store';
import { fetchMission } from 'src/utils/api/missionAPI';
import { MissionType } from 'src/utils/interfaces/mission.type';

export interface AppState {
  mission: MissionType | null;
  status: string;
}

const initialState: AppState = {
  mission: null,
  status: 'idle',
};

export const getMissionData = createAsyncThunk('app/fetchMission', async () => {
  const response = await fetchMission();
  return response.data;
});

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    tempAction: (state) => {
      console.log(state.mission);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMissionData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getMissionData.fulfilled, (state, action) => {
        state.status = 'idle';
        state.mission = action.payload;
      });
  },
});

export const { tempAction } = appSlice.actions;
export const selectMission = (state: RootState) => state.app.mission;

export default appSlice.reducer;
