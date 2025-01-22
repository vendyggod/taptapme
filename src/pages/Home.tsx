import {ClickerButton} from '../features/clicker/ui/ClickerButton';
import {Score} from '../features/score/ui/Score';
import {FC} from "react";
import {Energy} from "../features/clicker/ui/Energy.tsx";

export const Home: FC = () => {
    return (
        <div>
            <Score/>
            <ClickerButton/>
            <Energy/>
        </div>
    );
};
