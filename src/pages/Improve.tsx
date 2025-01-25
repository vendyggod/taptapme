import {FC} from "react";
import {CardList} from "../features/improve-cards/ui/CardList.tsx";
import {Score} from "../widgets";

export const Improve: FC = () => {
    return <>
        <Score/>
        <CardList/>
    </>
};
