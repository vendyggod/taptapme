import {useCallback, useEffect, useState} from "react";
import {IUser} from "../../../shared/types";
import {getUser, updateUserAPI} from "../../../services/apis/api.ts";
import debounce from "lodash/debounce";

//  Returns User object loaded from DB + function to add score
export const useUserModel = () => {
    const [user, setUser] = useState<IUser | null>(null);

    const updateUser = (newData: Partial<IUser>) => {
        setUser((prevUser) => prevUser ? {...prevUser, ...newData} : null)
    }

    // Fetching user data and save it to local state to pass to context
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

    // Syncing new user data with user object in database
    const syncUserWithServer = useCallback(
        debounce(async (updatedUser: IUser) => {
            if (user) {
                try {
                    await updateUserAPI(updatedUser);
                } catch (error) {
                    console.error("Failed to sync score with server:", error);
                }
            }
        }, 10),
        [user]
    );

    useEffect(() => {
        if (user) {
            syncUserWithServer(user);
        }

        return () => syncUserWithServer.cancel();
    }, [user, syncUserWithServer]);

    return {user, updateUser};
}

