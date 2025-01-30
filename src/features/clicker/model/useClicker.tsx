import {useDispatch, useSelector} from "react-redux";
import {updateScoreClick} from "../../../entities/user/model/userSlice.ts";
import {useDebouncedCallback} from "../../../shared/hooks/useDebouncedCallback.tsx";
import {updateUserSettingsAPI} from "../../../services/apis/api.ts";
import {RootState} from "../../../app/store.ts";
import {useMutation} from "@tanstack/react-query";

export const useClicker = () => {
    const dispatch = useDispatch()
    const userSettings = useSelector((state: RootState) => state.user.user_settings)
    const {mutate: updateUserSettings} = useMutation({
        mutationFn: () => updateUserSettingsAPI(userSettings),
    })

    const debouncedClick = useDebouncedCallback(() => {
        updateUserSettings()
    }, 500)

    const increaseScore = () => {
        dispatch(updateScoreClick())
        debouncedClick();
    };

    return increaseScore;
}

