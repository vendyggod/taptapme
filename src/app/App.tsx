import {GlobalStyles} from './styles';
import {AppRoutes} from './AppRoutes';
import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from './';
import {FC} from "react";
import {UserProvider} from "./providers/UserProvider.tsx";

export const App: FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <GlobalStyles/>
            <UserProvider>
                <AppRoutes/>
            </UserProvider>
        </QueryClientProvider>
    );
};
