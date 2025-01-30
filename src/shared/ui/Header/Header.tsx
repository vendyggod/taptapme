import {AccountOverview} from '../../../widgets';
import {StyledHeader} from './Header.styles.tsx';
import {FC} from "react";

export const Header: FC = () => {
    return (
        <StyledHeader>
            <AccountOverview/>
        </StyledHeader>
    );
};
