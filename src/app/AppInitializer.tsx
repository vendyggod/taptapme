import React, {useEffect} from "react";
import {useMutation, useQuery} from "@tanstack/react-query";
import {useDispatch, useSelector} from "react-redux";
import {fetchUser, updateUserSettingsAPI} from "../services/apis/api.ts";
import {RootState} from "./store.ts";
import {getUserSettings, setInitialized, updateUser} from "../entities/user/model/userSlice.ts";
import Spinner from "../shared/ui/Spinner/Spinner.tsx";
import {usePassiveIncome} from "../features/passive-income/model/usePassiveIncome.tsx";

export const AppInitializer = ({children}: { children: React.ReactNode }) => {
    const dispatch = useDispatch();
    const isInitialized = useSelector((state: RootState) => state.user.isInitialized);
    const userSettingsLocal = useSelector(getUserSettings);
    const startPassiveIncome = usePassiveIncome()

    // Fetching data and store it to RTK
    const {data: user} = useQuery(['user'], fetchUser);
    const {mutate: updadateSettingsAPI} = useMutation(updateUserSettingsAPI);

    useEffect(() => {
        if (user) {
            dispatch(updateUser(user));
            dispatch(setInitialized())
        }
    }, [user, dispatch]);

    // Start passive income
    useEffect(() => {
        startPassiveIncome()
    }, [startPassiveIncome]);

    // Listening for closing tab
    useEffect(() => {
        const handleBeforeUnload = (e: BeforeUnloadEvent) => {
            updadateSettingsAPI(userSettingsLocal);
            e.preventDefault();
            e.returnValue = ''; // Deprecated but needs to be for older browsers
        };

        window.addEventListener('beforeunload', handleBeforeUnload)

        return () => window.removeEventListener('beforeunload', handleBeforeUnload);
    }, [updadateSettingsAPI, userSettingsLocal]);

    if (!isInitialized) {
        return <Spinner/>;
    }

    return <>{children}</>;
};