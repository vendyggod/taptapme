import styled, {css} from 'styled-components';
import {tablet} from "../../consts.ts";

export const StyledAvatarRounded = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;

    ${tablet(css`
        width: 44px;
        height: 44px;
    `)}
`;
