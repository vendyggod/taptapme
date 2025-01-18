import React, {useCallback, useEffect, useState} from "react";
import {IUser} from "../../../shared/types/";
import {getUser, updateScore} from "../../../services/apis/api.ts";
import {SCORE_PER_CLICK} from "../../../shared/consts.ts";
import debounce from "lodash/debounce";

//  Returns User object loaded from DB + function to add score
export const useUserModel = () => {
    const [user, setUser] = useState<IUser | null>(null);

    const updateUser = (newData: Partial<IUser>) => {
        setUser((prev) => prev ? {...prev, newData} : null)
    }

    useEffect(() => {
        const loadUserData = async () => {
            try {
                const userData = await getUser();
                setUser(userData);
            } catch (error) {
                console.log(error);
            }
        };

        loadUserData();
    }, []);

    const syncScoreWithServer = useCallback(
        debounce(async () => {
            if (user) {
                try {
                    await updateScore(user.score);
                } catch (error) {
                    console.error("Failed to sync score with server:", error);
                }
            }
        }, 1),
        [user]
    );

    useEffect(() => {
        syncScoreWithServer();
        return () => syncScoreWithServer.cancel();
    }, [syncScoreWithServer]);

    const addScore: React.MouseEventHandler<HTMLButtonElement> = () => {
        if (user) {
            setUser({...user, score: user.score + SCORE_PER_CLICK});
        }
    };

    return {user, addScore};
}

