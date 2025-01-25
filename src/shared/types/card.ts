export interface ICard {
    id: number;
    title: string;
    max_lvl: number;
    image_url: string;
    isExpired: boolean;
}

export type TCards = ICard[];