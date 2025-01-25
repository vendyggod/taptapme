import {ClickerButton} from '../features/clicker';
import {Score} from '../widgets';
import {FC} from "react";
import {Energy} from "../features/clicker";

export const Home: FC = () => {
    return (
        <div>
            <Score/>
            <ClickerButton/>
            <Energy/>
        </div>
    );
};
