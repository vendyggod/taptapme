import {Container, StyledButton} from './ClickerButton.styles';
import {FC} from "react";
import {useUser} from "../../../app/UserContext.tsx";

export const ClickerButton: FC = () => {
    const {addScore} = useUser()

    return (
        <Container>
            <StyledButton onClick={addScore}>Click me</StyledButton>
        </Container>
    );
};
