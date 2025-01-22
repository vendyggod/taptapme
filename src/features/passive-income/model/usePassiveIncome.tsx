import {useCallback, useRef} from "react";
import {useDispatch} from "react-redux";
import {updateScorePassive} from "../../../entities/user/model/userSlice.ts";

export const usePassiveIncome = () => {
    const dispatch = useDispatch();
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    return useCallback(() => {
        if (intervalRef.current) return;

        intervalRef.current = setInterval(() => {
            dispatch(updateScorePassive());
        }, 1000);
    }, [dispatch]);
}