import {UserContextType} from "../shared/types";
import {
    createContext,
    FC,
    ReactNode,
    useContext,
    useEffect,
    useCallback,
} from "react";
import {updateScore} from "../services/apis/api.ts";
import debounce from "lodash/debounce";
import {useUserModel} from "../features/user/model/useUserModel.ts";

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
    children: ReactNode;
}

export const UserProvider: FC<UserProviderProps> = ({children}) => {
    const {user} = useUserModel()


    return (
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = (): UserContextType => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};