import {FC} from "react";
import {CardList} from "../features/cards/ui/CardList/CardList.tsx";
import {Score} from "../widgets";

export const Improve: FC = () => {
    return <>
        <Score/>
        <CardList/>
    </>
};
