export interface IUserInitialLocalState extends IUser {
    isInitialized: boolean,
}

export interface IUser<TSettings = IUserSettings, TCards = IUserCard> {
    id: number | null;
    nickname: string;
    avatar_url: string;
    user_settings: TSettings;
    user_cards: TCards;
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

export interface IUserCard {
    user_id: number | null;
    card_id: number | null;
    current_lvl: number;
    score_per_sec: number;
}
