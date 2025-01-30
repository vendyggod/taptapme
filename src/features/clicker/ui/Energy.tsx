import {FC} from "react";
import {Container, StyledEnergy} from "./Energy.styles.tsx";
import {RootState} from "../../../app/store.ts";
import {useSelector} from "react-redux";

export const Energy: FC = () => {
    const total_energy = useSelector((state: RootState) => state.user.user_settings.total_energy)
    const current_energy = useSelector((state: RootState) => state.user.user_settings.current_energy)

    return <Container>
        <StyledEnergy>{current_energy} / {total_energy}</StyledEnergy>
    </Container>
}