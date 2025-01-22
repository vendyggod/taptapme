import React, {useEffect} from "react";
import {useMutation, useQuery} from "@tanstack/react-query";
import {useDispatch, useSelector} from "react-redux";
import {fetchUser, fetchUserSettings, updateUserSettingsAPI} from "../services/apis/api.ts";
import {RootState} from "./store.ts";
import {setInitialized, updateSettings, updateUser} from "../entities/user/model/userSlice.ts";
import Spinner from "../shared/ui/Spinner/Spinner.tsx";
import {usePassiveIncome} from "../features/passive-income/model/usePassiveIncome.tsx";

export const AppInitializer = ({children}: { children: React.ReactNode }) => {
    const dispatch = useDispatch();
    const isInitialized = useSelector((state: RootState) => state.user.isInitialized);
    const userSettingsLocal = useSelector((state: RootState) => state.user.userSettings);
    const startPassiveIncome = usePassiveIncome()

    const {data: user} = useQuery(['user'], fetchUser);
    const {data: userSettings} = useQuery(['userSettings'], fetchUserSettings);
    const {mutate} = useMutation(updateUserSettingsAPI);

    // Fetching data to store it to redux local global state
    useEffect(() => {
        if (user && userSettings) {
            dispatch(updateUser(user));
            dispatch(updateSettings(userSettings));
            dispatch(setInitialized());
        }
    }, [user, userSettings, dispatch]);

    // Starting passive income
    useEffect(() => {
        startPassiveIncome()
    }, [startPassiveIncome]);

    // Listening for closing app by user
    useEffect(() => {
        const handleBeforeUnload = (e: BeforeUnloadEvent) => {
            mutate(userSettingsLocal);
            e.preventDefault();
            e.returnValue = '';
        };

        window.addEventListener('beforeunload', handleBeforeUnload)

        return () => window.removeEventListener('beforeunload', handleBeforeUnload);
    }, [mutate, userSettingsLocal]);

    if (!isInitialized) {
        return <Spinner/>;
    }

    return <>{children}</>;
};