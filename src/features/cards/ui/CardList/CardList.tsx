import {FC} from "react";
import {useCards} from "../../model/useCards.ts";
import {Card} from "../Card/Card.tsx";
import {StyledCardList} from "./CardList.styles.tsx";
import Spinner from "../../../../shared/ui/Spinner/Spinner.tsx";

export const CardList: FC = () => {
    const {cardsAll} = useCards()

    if (!cardsAll) return <Spinner/>

    return <StyledCardList>
        {cardsAll?.map(card => <Card key={card.id} card={card}/>)}
    </StyledCardList>

}