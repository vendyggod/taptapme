import {FC} from 'react';
import {StyledScore} from './Score.styles';
import {useUser} from "../../../app/providers/UserProvider.tsx";

export const Score: FC = () => {
    const {user} = useUser()

    return (
        <StyledScore>
            <span>{`${user?.score || 0}`}</span>
        </StyledScore>
    );
};
