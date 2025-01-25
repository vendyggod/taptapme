import {useQuery} from "@tanstack/react-query";
import {fetchCards} from "../../../services/apis/api.ts";
import {TCards} from "../../../shared/types";

export const useCards = (): TCards | undefined => {
    const {data: cards} = useQuery(['cards'], fetchCards);

    return cards;
}