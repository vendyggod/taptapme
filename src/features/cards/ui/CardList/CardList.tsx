import {FC} from "react";
import {useCards} from "../../model/useCards.ts";
import {Card} from "../Card/Card.tsx";
import {StyledCardList} from "./CardList.styles.tsx";
import Spinner from "../../../../shared/ui/Spinner/Spinner.tsx";
import {IUserCard} from "../../../../shared/types";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {updateCardLevel} from "../../../../services/apis/api.ts";

export const CardList: FC = () => {
    const {cardsAll, userCards} = useCards()
    const queryClient = useQueryClient()

    const {mutate: onLevelUp} = useMutation({
        mutationFn: ({cardId, newLvl}: { cardId: number, newLvl: number }) => updateCardLevel(cardId, newLvl),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['user_cards']})
        },
        onError: (error) => console.log(error)
    })

    const handleClickCard = (cardId: number) => {
        const userCard = userCards.find((userCard: IUserCard) => userCard.card_id === cardId);

        if (userCard) {
            const newLvl = userCard.current_lvl + 1;
            onLevelUp({cardId, newLvl});
        }
    };

    const matchCards = (cardId: number) => {
        return userCards.find((userCard: IUserCard) => userCard.card_id === cardId)
    }

    // Check if user has a card and it's lvl at least 1
    const isCardActive = (cardId: number) => {
        const userCard = userCards.find((userCard: IUserCard) => userCard.card_id === cardId);
        return userCard && userCard.current_lvl > 0;
    };


    if (!cardsAll) return <Spinner/>

    return <StyledCardList>
        {cardsAll?.map(card => <Card key={card.id} card={card} cardSettings={matchCards(card.id)}
                                     isDisabled={!isCardActive(card.id)} onLevelUp={() => handleClickCard(card.id)}/>)}
    </StyledCardList>

}