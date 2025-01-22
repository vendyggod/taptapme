import {IUser, IUserInitialLocalState, IUserSettings} from "../../../shared/types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../../app/store.ts";


const initialState: IUserInitialLocalState = {
    user: {
        id: null,
        nickname: '',
        avatar_url: '',
    },
    userSettings: {
        id: null,
        total_score: 0,
        score_per_click: 0,
        score_per_sec: 0,
        total_energy: 0,
        current_energy: 0,
        energy_per_sec: 0,
    },

    isInitialized: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser: (state: IUserInitialLocalState, action: PayloadAction<IUser>) => {
            state.user = action.payload
        },
        updateSettings: (state: IUserInitialLocalState, action: PayloadAction<Partial<IUserSettings>>) => {
            state.userSettings = {
                ...state.userSettings,
                ...action.payload
            };
        },
        updateScoreClick: (state: IUserInitialLocalState) => {
            const {score_per_click, current_energy, total_score} = state.userSettings;

            if (current_energy > 0) {
                const actualClickScore = Math.min(score_per_click, current_energy);
                state.userSettings.total_score = total_score + actualClickScore;
                state.userSettings.current_energy = current_energy - actualClickScore;
            }
        },
        updateScorePassive: (state: IUserInitialLocalState) => {
            const {total_energy, current_energy, energy_per_sec,} = state.userSettings;
            state.userSettings.total_score += state.userSettings.score_per_sec

            if (total_energy > 0) {
                state.userSettings.current_energy = Math.min(
                    current_energy + energy_per_sec,
                    total_energy
                );
            }
        },
        setInitialized: (state: IUserInitialLocalState) => {
            state.isInitialized = true;
        }
    },
})

export const {updateUser, updateSettings, setInitialized, updateScoreClick, updateScorePassive} = userSlice.actions;
export default userSlice.reducer;

// Selectors
export const getUser = (state: RootState) => state.user.user;
export const getUserSettings = (state: RootState) => state.user.userSettings;