import {TUserCards} from "./card.ts";

export interface IUserInitialLocalState extends IUser {
    isInitialized: boolean,
}

export interface IUser {
    id: number | null;
    nickname: string;
    avatar_url: string;
    user_settings: IUserSettings;
    user_cards: TUserCards;
}

export interface IUserSettings {
    id: number | null;
    total_score: number;
    score_per_click: number;
    score_per_sec: number;
    total_energy: number;
    current_energy: number;
    energy_per_sec: number;
}


