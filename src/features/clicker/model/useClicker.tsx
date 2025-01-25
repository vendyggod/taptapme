import {useDispatch, useSelector} from "react-redux";
import {getUserSettings, updateScoreClick} from "../../../entities/user/model/userSlice.ts";
import {useDebouncedCallback} from "../../../shared/hooks/useDebouncedCallback.tsx";
import {updateUserSettingsAPI} from "../../../services/apis/api.ts";
import {IUserSettings} from "../../../shared/types";

export const useClicker = () => {
    const dispatch = useDispatch()
    const userSettings = useSelector(getUserSettings)

    const debouncedClick = useDebouncedCallback((settings: IUserSettings) => {
        updateUserSettingsAPI(settings)
    }, 100)

    const increaseScore = () => {
        dispatch(updateScoreClick())
        debouncedClick(userSettings);
    };

    return {increaseScore};
}

