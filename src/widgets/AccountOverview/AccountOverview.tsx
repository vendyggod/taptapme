import { AvatarRounded } from '../../shared/ui';
import { StyledAccountOverview } from './AccountOverview.styles';

export const AccountOverview: React.FC = () => {
  return (
    <StyledAccountOverview>
      <AvatarRounded url="https://64.media.tumblr.com/2a2459f9b322613562122a3bf853e50d/tumblr_nduaprpEwW1tqy07mo2_250.gifv" />
      <span>Kurome</span>
      {/* <ExpBar /> */}
    </StyledAccountOverview>
  );
};
