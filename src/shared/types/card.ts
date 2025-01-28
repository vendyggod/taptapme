export interface IUserCard {
    user_id: number | null;
    card_id: number | null;
    current_lvl: number;
    score_per_sec: number;
}

export type TUserCards = IUserCard[];

export interface ICard {
    id: number;
    title: string;
    max_lvl: number;
    image_url: string;
    isExpired: boolean;
}

export type TCards = ICard[];