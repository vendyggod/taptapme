import {Outlet} from 'react-router';
import {Header, Navigation} from '../';
import {Container, Main, StyledAppLayout} from './AppLayout.styles';
import {FC} from "react";

export const AppLayout: FC = () => {
    return (
        <Container>
            <StyledAppLayout>
                <Header/>
                <Main>
                    <Outlet/>
                </Main>
                <Navigation/>
            </StyledAppLayout>
        </Container>
    );
};
