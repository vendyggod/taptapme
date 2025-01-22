import {USER_ID} from '../../shared/consts';
import {IUser, IUserSettings} from '../../shared/types';
import {supabase} from '../supabase/supabase';

export const fetchUser = async (): Promise<IUser> => {
    const {data, error} = await supabase
        .from('users')
        .select()
        .eq('id', USER_ID)
        .single();

    if (error) {
        throw new Error(error.message);
    }

    return data;
};

export const fetchUserSettings = async (): Promise<IUserSettings> => {
    const {data, error} = await supabase.from('user_settings').select().eq('id', USER_ID).single();

    if (error) {
        throw new Error(error.message);
    }

    return data
}

export const updateUserSettingsAPI = async (newSettings: IUserSettings): Promise<void> => {
    const {error} = await supabase
        .from('user_settings')
        .update(newSettings)
        .eq('id', newSettings.id);

    if (error) {
        throw new Error(error.message);
    }
};
