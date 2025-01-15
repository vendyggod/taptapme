import { useScore } from './model/useScore';
import { StyledScore } from './Score.styles';

export const Score: React.FC = () => {
  const { score } = useScore();

  return (
    <StyledScore>
      <span>{score}</span>
    </StyledScore>
  );
};
