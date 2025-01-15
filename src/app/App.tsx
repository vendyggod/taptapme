import { GlobalStyles } from './styles';
import { AppRoutes } from './AppRoutes';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './';

export const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <AppRoutes />
    </QueryClientProvider>
  );
};
