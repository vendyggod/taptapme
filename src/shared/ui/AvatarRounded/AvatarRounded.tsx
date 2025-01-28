import {StyledAvatarRounded} from './AvatarRounded.styles';
import {FC} from "react";

interface AvatarRoundedProps {
    url: string;
}

export const AvatarRounded: FC<AvatarRoundedProps> = ({url}) => {
    return <StyledAvatarRounded src={url} alt="avatar"/>;
};
