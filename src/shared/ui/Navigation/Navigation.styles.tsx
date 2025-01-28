import {NavLink} from 'react-router';
import styled from 'styled-components';

export const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 8px;
    margin-top: auto;
`;

export const StyledNavLink = styled(NavLink)`
    &:link, &:visited {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        font-size: 1.4rem;
        font-weight: 500;
    }

    &:hover, &:focus {
        color: deepskyblue;
    }

    & svg {
        width: 3.6rem;
        height: 3.6rem;
        transition: all 0.3s;
    }

    span {
        font-weight: 600;
    }
`;
