import {supabase} from '../supabase/supabase';
import {USER_ID} from '../../shared/consts';
import {IUser, IUserSettings, TUserCards} from '../../shared/types';
import {TCards} from "../../shared/types";

export const fetchUser = async (): Promise<IUser> => {
    const {data, error} = await supabase
        .from('users')
        .select('*')
        .eq('id', USER_ID)
        .single();

    if (error) throw new Error(error.message);

    return data;
};

export const fetchUserSettings = async (): Promise<IUserSettings> => {
    const {data, error} = await supabase
        .from('user_settings')
        .select('*')
        .eq('id', USER_ID)
        .single();

    if (error) throw new Error(error.message);

    return data;
}

export const fetchUserCards = async (): Promise<TUserCards> => {
    const {data, error} = await supabase
        .from('user_cards')
        .select('*')
        .eq('user_id', USER_ID)

    if (error) throw new Error(error.message);

    return data;
}

export const createNewCard = async (userId: number, cardId: number): Promise<void> => {
    const {error} = await supabase
        .from('user_cards')
        .insert([
            {user_id: userId, card_id: cardId, current_lvl: 1, score_per_sec: 1000},
        ])
        .select()

    if (error) throw new Error(error.message);

    // return data
}

export const updateUserSettingsAPI = async (newSettings: IUserSettings): Promise<void> => {
    const {error} = await supabase
        .from('user_settings')
        .update(newSettings)
        .eq('id', newSettings.id);

    if (error) throw new Error(error.message);
};

export const fetchAllCards = async (): Promise<TCards> => {
    const {data, error} = await supabase.from('cards').select('*');

    if (error) throw new Error(error.message);

    return data
}

export const updateCardLevel = async (cardId: number, newLvl: number): Promise<void> => {
    const {error} = await supabase
        .from('user_cards')
        .update({current_lvl: newLvl})
        .eq('user_id', USER_ID)
        .eq('card_id', cardId)
        .select()

    if (error) throw new Error(error.message);
}