import {FC} from "react";
import {Container, StyledEnergy} from "./Energy.styles.tsx";
import {useEnergy} from "../";

export const Energy: FC = () => {
    const {total_energy, current_energy} = useEnergy()

    return <Container>
        <StyledEnergy>{current_energy} / {total_energy}</StyledEnergy>
    </Container>
}