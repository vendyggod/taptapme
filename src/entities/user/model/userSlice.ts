import {IUser, IUserInitialLocalState, IUserSettings, TUserCards} from "../../../shared/types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: IUserInitialLocalState = {
    id: null,
    nickname: '',
    avatar_url: '',
    user_settings: {
        id: null,
        total_score: 0,
        score_per_click: 0,
        score_per_sec: 0,
        total_energy: 0,
        current_energy: 0,
        energy_per_sec: 0,
    },
    user_cards: [],
    isInitialized: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser: (state: IUserInitialLocalState, action: PayloadAction<IUser>) => {
            state.id = action.payload.id;
            state.nickname = action.payload.nickname;
            state.avatar_url = action.payload.avatar_url;
        },
        updateSettings: (state: IUserInitialLocalState, action: PayloadAction<IUserSettings>) => {
            state.user_settings = action.payload;
        },
        updateCards: (state: IUserInitialLocalState, action: PayloadAction<TUserCards>) => {
            state.user_cards = action.payload;
        },
        updateScoreClick: (state: IUserInitialLocalState) => {
            const {score_per_click, current_energy, total_score} = state.user_settings;

            if (current_energy > 0) {
                const actualClickScore = Math.min(score_per_click, current_energy);
                state.user_settings.total_score = total_score + actualClickScore;
                state.user_settings.current_energy = current_energy - actualClickScore;
            }
        },
        updateScorePassive: (state: IUserInitialLocalState) => {
            const {total_energy, current_energy, energy_per_sec,} = state.user_settings;
            state.user_settings.total_score += state.user_settings.score_per_sec

            if (total_energy > 0) {
                state.user_settings.current_energy = Math.min(
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

export const {
    updateUser,
    updateSettings,
    updateCards,
    setInitialized,
    updateScoreClick,
    updateScorePassive
} = userSlice.actions;
export default userSlice.reducer;
