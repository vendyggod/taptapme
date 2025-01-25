import {useSelector} from "react-redux";
import {getUserSettings} from "../../../entities/user/model/userSlice.ts";

export const useEnergy = () => {
    const {total_energy, current_energy} = useSelector(getUserSettings)

    return {total_energy, current_energy}
};