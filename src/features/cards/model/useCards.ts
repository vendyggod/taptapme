import {useQuery} from "@tanstack/react-query";
import {fetchCards} from "../../../services/apis/api.ts";
import {useSelector} from "react-redux";
import {getUserCards} from "../../../entities/user/model/userSlice.ts";

export const useCards = () => {
    const {data: cardsAll} = useQuery(['cards'], fetchCards);
    const userCards = useSelector(getUserCards)

    return {cardsAll, userCards};
}