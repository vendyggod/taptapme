import {FC} from 'react';
import {StyledScore} from './Score.styles.tsx';
import {useSelector} from "react-redux";
import {RootState} from "../../app/store.ts";

export const Score: FC = () => {
    const score = useSelector((state: RootState) => state.user.user_settings.total_score)

    return (
        <StyledScore>
            <span>{`${score}`}</span>
        </StyledScore>
    );
};
