import {useEffect} from "react";
import {useMutation, useQuery} from "@tanstack/react-query";
import {useDispatch, useSelector} from "react-redux";
import {fetchUser, fetchUserSettings, updateUserSettingsAPI} from "../services/apis/api.ts";
import {RootState} from "./store.ts";
import {setInitialized, updateSettings, updateUser} from "../entities/user/model/userSlice.ts";
import Spinner from "../shared/ui/Spinner/Spinner.tsx";
import {usePassiveIncome} from "../features/passive-income/model/usePassiveIncome.tsx";

export const AppInitializer = () => {
    const isInitialized = useSelector((state: RootState) => state.user.isInitialized);
    const userSettingsLocal = useSelector((state: RootState) => state.user.user_settings);
    const startPassiveIncome = usePassiveIncome()
    const dispatch = useDispatch();

    // Fetching data and store it to RTK
    const {data: user} = useQuery(['user'], fetchUser);
    const {data: userSettings} = useQuery(['user_settings'], fetchUserSettings);
    const {mutate: updateSettingsAPI} = useMutation(updateUserSettingsAPI);

    useEffect(() => {
        if (user && userSettings) {
            dispatch(updateUser(user))
            dispatch(updateSettings(userSettings))
            dispatch(setInitialized())
        }
    }, [user, userSettings, dispatch]);

    // Start passive income
    useEffect(() => {
        startPassiveIncome()
    }, [startPassiveIncome]);

    // Listening for closing tab
    useEffect(() => {
        const handleBeforeUnload = (e: BeforeUnloadEvent) => {
            updateSettingsAPI(userSettingsLocal);
            e.preventDefault();
            e.returnValue = ''; // Deprecated but needs to be for older browsers
        };

        window.addEventListener('beforeunload', handleBeforeUnload)

        return () => window.removeEventListener('beforeunload', handleBeforeUnload);
    }, [updateSettingsAPI, userSettingsLocal]);

    if (!isInitialized) {
        return <Spinner/>;
    }
};