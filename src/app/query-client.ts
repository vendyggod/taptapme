import {DefaultOptions, QueryClient} from '@tanstack/react-query';

const defaultOptions: DefaultOptions = {
    queries: {
        staleTime: 0,
        cacheTime: 600,
        refetchOnWindowFocus: false,
        refetchOnReconnect: true,
    },
};

export const queryClient: QueryClient = new QueryClient({
    defaultOptions,
});
