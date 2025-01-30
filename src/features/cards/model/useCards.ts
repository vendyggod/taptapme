import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {createNewCard, fetchAllCards, fetchUserCards, updateCardLevel} from "../../../services/apis/api.ts";
import {useDispatch} from "react-redux";
import {updateCards} from "../../../entities/user/model/userSlice.ts";
import {useCallback, useEffect} from "react";
import {IUserCard} from "../../../shared/types";
import {USER_ID} from "../../../shared/consts.ts";

export const useCards = () => {
    const queryClient = useQueryClient()
    const dispatch = useDispatch();
    const {data: cardsAll} = useQuery(['cards'], fetchAllCards);
    const {data: userCards} = useQuery(['user_cards'], fetchUserCards);

    const {mutate: onLevelUp} = useMutation({
        mutationFn: ({cardId, newLvl}: { cardId: number, newLvl: number }) => updateCardLevel(cardId, newLvl),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['user_cards']});
        },
        onError: (error) => console.log(error)
    })

    const {mutate: createCard} = useMutation({
        mutationFn: ({userId, cardId}: { userId: number, cardId: number }) => createNewCard(userId, cardId),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['user_cards']})
        },
        onError: (error) => console.log(error)
    })

    const handleLvlUpCard = useCallback((cardId: number) => {
        const userCard = userCards?.find((userCard: IUserCard) => userCard.card_id === cardId);

        if (userCard) {
            const newLvl = userCard.current_lvl + 1;
            onLevelUp({cardId, newLvl});
        } else {
            createCard({userId: USER_ID, cardId})
        }
    }, [userCards, createCard, onLevelUp]);

    const matchCards = useCallback((cardId: number) => {
        return userCards?.find((userCard: IUserCard) => userCard.card_id === cardId)
    }, [userCards]);

    // Check if user has a card and it's lvl at least 1
    const isCardActive = useCallback((cardId: number) => {
        const userCard = userCards?.find((userCard: IUserCard) => userCard.card_id === cardId);
        return userCard && userCard.current_lvl > 0;
    }, [userCards]);

    useEffect(() => {
        if (userCards) {
            dispatch(updateCards(userCards));
        }
    }, [userCards, dispatch]);


    return {cardsAll, handleLvlUpCard, createCard, matchCards, isCardActive};
}