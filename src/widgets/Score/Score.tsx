import {FC} from 'react';
import {StyledScore} from './Score.styles.tsx';
import {useSelector} from "react-redux";
import {getUserSettings} from "../../entities/user/model/userSlice.ts";

export const Score: FC = () => {
    const userSettings = useSelector(getUserSettings)

    return (
        <StyledScore>
            <span>{`${userSettings?.total_score}`}</span>
        </StyledScore>
    );
};
