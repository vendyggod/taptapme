import {FC} from "react";
import {ICard} from "../../../../shared/types";
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
import {useCards} from "../../model/useCards.ts";

interface CardProps {
    card: ICard;
}

export const Card: FC<CardProps> = ({card}) => {
    const {handleLvlUpCard, isCardActive, matchCards} = useCards()
    const cardSettings = matchCards(card.id)

    const handleClick = () => {
        handleLvlUpCard(card.id)
    }

    return <StyledCard $disabled={!isCardActive(card.id)} onClick={handleClick}>
        <CardEmoji>🚗</CardEmoji>
        <CardTitle>{card.title}</CardTitle>

        <ScorePerHourInfo>
            <h3>Trading/hour</h3>
            <ScorePerHour>+ 1234</ScorePerHour>
        </ScorePerHourInfo>

        <LvlInfo>
            <CurrentLvl>Level {`${cardSettings?.current_lvl || '0'}`}</CurrentLvl>
            <PriceToLvlUp>2k</PriceToLvlUp>
        </LvlInfo>
    </StyledCard>
}