import styled from 'styled-components';

export const Container = styled.div`
    height: 100dvh;
    width: 100%;
    padding: 0;
    display: flex;
`;

export const StyledAppLayout = styled.div`
    height: 100%;
    width: 100%;
    background-color: #000;

    display: grid;
    grid-template-rows: auto 1fr auto;
`;

export const Main = styled.main`
    padding: 2rem 10px;
    overflow-y: auto;
`;


