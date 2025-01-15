import { Outlet } from 'react-router';
import { Header, Navigation } from '../../../features';
import { Container, Main, StyledAppLayout } from './AppLayout.styles';

export const AppLayout: React.FC = () => {
  return (
    <Container>
      <StyledAppLayout>
        <Header />
        <Main>
          <Outlet />
        </Main>
        <Navigation />
      </StyledAppLayout>
    </Container>
  );
};
