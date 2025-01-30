import {AvatarRounded} from '../../shared/ui';
import {Nickname, StyledAccountOverview} from './AccountOverview.styles';
import {FC} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../app/store.ts";

export const AccountOverview: FC = () => {
    const avatar_url = useSelector((state: RootState) => state.user.avatar_url)
    const nickname = useSelector((state: RootState) => state.user.nickname)

    return (
        <StyledAccountOverview>
            <AvatarRounded
                url={avatar_url}/>
            <Nickname>{nickname}</Nickname>
        </StyledAccountOverview>
    );
};
