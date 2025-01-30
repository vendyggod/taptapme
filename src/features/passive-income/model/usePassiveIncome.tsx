import {useCallback, useEffect, useRef} from "react";
import {useDispatch} from "react-redux";
import {updateScorePassive} from "../../../entities/user/model/userSlice.ts";

export const usePassiveIncome = () => {
    const dispatch = useDispatch();
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const startPassiveIncome = useCallback(() => {
        if (intervalRef.current) return;

        intervalRef.current = setInterval(() => {
            dispatch(updateScorePassive());
        }, 1000);
    }, [dispatch]);

    useEffect(() => {
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, []);

    return startPassiveIncome
}