import {FC} from "react";
import {ICard} from "../../../shared/types";
import styled from "styled-components";

interface CardProps {
    card: ICard;
}

const StyledCard = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #222;
    padding: 3px;
    border-radius: 12px;

    p {
        font-size: 1.2rem;
    }
`

const CardTilte = styled.h3`
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottom: 8px;
`

const CardEmoji = styled.span`
    font-size: 4.8rem;`

const ScorePerHourInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    padding: 0 8px;
    margin-bottom: 6px;

    h3 {
        font-size: 1.2rem;
        font-weight: normal;
        color: #c9c9c9;
    }
`

const ScorePerHour = styled.span`
    font-size: 1.4rem;
    font-weight: bold;
`

const LvlInfo = styled.div`
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #666;

    width: 100%;
    padding: 4px 8px;
`

const CurrentLvl = styled.span`
    font-size: 1.4rem;`

const PriceToLvlUp = styled.span`
    font-size: 1.4rem;
    color: lightgreen;
    font-weight: bold;
`

export const Card: FC<CardProps> = ({card}) => {
    return <StyledCard>
        <CardEmoji>🚗</CardEmoji>
        <CardTilte>{card.title}</CardTilte>

        <ScorePerHourInfo>
            <h3>Trading/hour</h3>
            <ScorePerHour>+ 1234</ScorePerHour>
        </ScorePerHourInfo>

        <LvlInfo>
            <CurrentLvl>Level 0</CurrentLvl>
            <PriceToLvlUp>2k</PriceToLvlUp>
        </LvlInfo>
    </StyledCard>
}