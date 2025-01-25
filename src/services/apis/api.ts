import {supabase} from '../supabase/supabase';
import {USER_ID} from '../../shared/consts';
import {IUser, IUserSettings} from '../../shared/types';
import {TCards} from "../../shared/types";

export const fetchUser = async (): Promise<IUser> => {
    const {data, error} = await supabase
        .from('users')
        .select(`*, user_settings (*), user_cards (card_id, current_lvl, score_per_sec)`)
        .eq('id', USER_ID)
        .single();

    if (error) throw new Error(error.message);

    console.log(data);
    return data;
};

export const updateUserSettingsAPI = async (newSettings: IUserSettings): Promise<void> => {
    const {error} = await supabase
        .from('user_settings')
        .update(newSettings)
        .eq('id', newSettings.id);

    if (error) throw new Error(error.message);
};

export const fetchCards = async (): Promise<TCards> => {
    const {data, error} = await supabase.from('cards').select('*');

    if (error) throw new Error(error.message);

    console.log(data)
    return data
}