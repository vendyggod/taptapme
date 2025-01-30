import {GlobalStyles} from './styles';
import {AppRoutes} from './AppRoutes';
import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from './';
import {FC} from "react";
import {MainProvider} from "./providers/mainProvider.tsx";
import {AppInitializer} from "./AppInitializer.tsx";

export const App: FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <GlobalStyles/>
            <MainProvider>
                <AppRoutes/>
                <AppInitializer/>
            </MainProvider>
        </QueryClientProvider>
    );
};
