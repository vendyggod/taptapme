import { NavLink } from 'react-router';
import styled from 'styled-components';

export const StyledNav = styled.nav`
  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

export const StyledNavLink = styled(NavLink)`
  &:link {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-size: 1.2rem;
    font-weight: 500;
    transition: all 0.3s;
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    transition: all 0.3s;
  }
`;
