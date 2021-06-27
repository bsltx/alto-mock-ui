import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'src/redux/store';
import { fetchMission } from 'src/helpers/utils';
import { MissionType } from 'src/helpers/mission.type';

export interface AppState {
  mission: MissionType;
  status: string;
}

const initialState: AppState = {
  mission: {
    trip: null,
    driver: null,
    vehicle: null,
    vibe: null
  },
  status: 'idle'
};

export const getMissionData = createAsyncThunk('app/fetchMission', async () => {
  const response = await fetchMission();
  return response.data;
});

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeVibe: (state, action: PayloadAction<string>) => {
      state.mission.vibe = { name: action.payload };
    },
    updateNotes: (state, action: PayloadAction<string>) => {
      if (state.mission.trip) {
        state.mission.trip.notes = action.payload;
      }
    }
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
  }
});

export const { changeVibe } = appSlice.actions;
export const selectMission = (state: RootState) => state.app.mission;
export const selectStatus = (state: RootState) => state.app.status;

export default appSlice.reducer;
