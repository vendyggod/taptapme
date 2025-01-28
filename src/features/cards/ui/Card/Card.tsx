import {FC} from "react";
import {ICard, IUserCard} from "../../../../shared/types";
import {
    CardEmoji,
    CardTitle,
    CurrentLvl,
    LvlInfo,
    PriceToLvlUp,
    ScorePerHour,
    ScorePerHourInfo,
    StyledCard
} from "./Card.styles.tsx";

interface CardProps {
    card: ICard;
    cardSettings?: IUserCard;
    isDisabled: boolean;
    onLevelUp: () => void;
}

export const Card: FC<CardProps> = ({card, cardSettings, isDisabled, onLevelUp}) => {
    return <StyledCard $disabled={isDisabled} onClick={onLevelUp}>
        <CardEmoji>🚗</CardEmoji>
        <CardTitle>{card.title}</CardTitle>

        <ScorePerHourInfo>
            <h3>Trading/hour</h3>
            <ScorePerHour>+ 1234</ScorePerHour>
        </ScorePerHourInfo>

        <LvlInfo>
            <CurrentLvl>Level {`${cardSettings?.current_lvl || 0}`}</CurrentLvl>
            <PriceToLvlUp>2k</PriceToLvlUp>
        </LvlInfo>
    </StyledCard>
}