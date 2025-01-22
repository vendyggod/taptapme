import {DefaultOptions, QueryClient} from '@tanstack/react-query';

const defaultOptions: DefaultOptions = {
    queries: {
        staleTime: Infinity,
        cacheTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: true,
    },
};

export const queryClient: QueryClient = new QueryClient({
    defaultOptions,
});
