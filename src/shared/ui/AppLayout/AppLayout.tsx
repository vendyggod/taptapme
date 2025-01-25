import {Outlet} from 'react-router';
import {Header, Navigation} from '../';
import {Container, Main, StyledAppLayout} from './AppLayout.styles';
import {FC} from "react";
import {AppInitializer} from "../../../app/AppInitializer.tsx";

export const AppLayout: FC = () => {
    return (
        <Container>
            <StyledAppLayout>
                <AppInitializer>
                    <Header/>
                    <Main>
                        <Outlet/>
                    </Main>
                    <Navigation/>
                </AppInitializer>
            </StyledAppLayout>
        </Container>
    );
};
