import {FC} from "react";
import {useCards} from "../model/useCards.ts";
import {Card} from "./Card.tsx";
import styled from "styled-components";

const StyledCardList = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem;
    grid-auto-rows: auto;
`

export const CardList: FC = () => {
    const cards = useCards()

    return <div>
        <StyledCardList>
            {cards?.map(card => <Card key={card.id} card={card}/>)}
        </StyledCardList>
    </div>
}