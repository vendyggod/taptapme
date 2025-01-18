import {ClickerButton} from '../features/clicker/ui/ClickerButton';
import {Score} from '../features/Score/ui/Score';
import {FC} from "react";

export const Home: FC = () => {
    return (
        <div>
            <Score/>
            <ClickerButton/>
        </div>
    );
};
