import {FC} from "react";
import {Container, StyledButton} from './ClickerButton.styles.tsx';
import {useClicker} from "../";

export const ClickerButton: FC = () => {
    const increaseScore = useClicker()

    return (
        <Container>
            <StyledButton onClick={increaseScore}>Click me</StyledButton>
        </Container>
    );
};
