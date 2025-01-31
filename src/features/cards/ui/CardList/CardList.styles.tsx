import styled, {css} from "styled-components";
import {tablet} from "../../../../shared/consts.ts";

export const StyledCardList = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem;
    grid-auto-rows: auto;

    margin-top: 4.8rem;

    ${tablet(css`
        max-width: 600px;
        margin: 4.8rem auto;
    `)}
`