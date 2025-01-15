import { StyledImg } from './AvatarRounded.styles';

interface AvatarRoundedProps {
  url: string;
}

export const AvatarRounded: React.FC<AvatarRoundedProps> = ({ url }) => {
  return <StyledImg src={url} alt="avatar" />;
};
