import styled from 'styled-components';

export const Container = styled.div`
    height: 100dvh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Main = styled.main`
    height: 49rem;
    padding: 2rem 10px;
    /* background-color: #c9c9c9; */
    overflow-y: auto;
`;

export const StyledAppLayout = styled.div`
    height: 60.5rem;
    overflow: scroll;
    width: 34rem;
    border-radius: 16px;
    background-color: #000;
`;
