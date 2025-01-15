import React from 'react';
import { Container, StyledButton } from './ClickerButton.styles';
import { useUpdateScore } from '../../Score/ui/model/useUpdateScore';

export const ClickerButton: React.FC = () => {
  const { updateScore } = useUpdateScore();
  const handleAddScore: React.MouseEventHandler<HTMLButtonElement> = () => {
    updateScore();
  };

  return (
    <Container>
      <StyledButton onClick={handleAddScore}>Click me</StyledButton>
    </Container>
  );
};
