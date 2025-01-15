import { AccountOverview } from '../../widgets/AccountOverview/AccountOverview';
import { StyledHeader } from './Header.styles';

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <AccountOverview />
    </StyledHeader>
  );
};
