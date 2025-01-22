export interface IUserInitialLocalState {
    user: IUser;
    userSettings: IUserSettings;
    isInitialized: boolean
}

export interface IUser {
    id: number | null;
    nickname: string;
    avatar_url: string;
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
