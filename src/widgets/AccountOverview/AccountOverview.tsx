import {AvatarRounded} from '../../shared/ui';
import {StyledAccountOverview} from './AccountOverview.styles';
import {FC} from "react";
import {useSelector} from "react-redux";
import {getUser} from "../../entities/user/model/userSlice.ts";

export const AccountOverview: FC = () => {
    const {avatar_url, nickname} = useSelector(getUser)

    return (
        <StyledAccountOverview>
            <AvatarRounded
                url={avatar_url}/>
            <span>{nickname}</span>
        </StyledAccountOverview>
    );
};
