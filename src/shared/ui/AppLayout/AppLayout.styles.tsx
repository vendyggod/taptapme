import styled, {css} from 'styled-components';
import {laptop, tablet} from "../../consts.ts";

export const Container = styled.div`
    display: flex;
    justify-content: center;

    height: 100dvh;
    width: 100%;
    padding: 0;
    background-color: #000;
`;

export const StyledAppLayout = styled.div`
    height: 100%;
    width: 100%;

    display: grid;
    grid-template-rows: auto 1fr auto;

    ${tablet(css`width: 75%;`)}
    ${laptop(css`width: 60%;`)}
`;

export const Main = styled.main`
    padding: 2rem 10px;
    overflow-y: auto;
`;


