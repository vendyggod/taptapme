import { ClickerButton } from '../features/ClickerButton/ui/ClickerButton';
import { Score } from '../features/Score/ui/Score';

export const Home: React.FC = () => {
  return (
    <div>
      <Score />
      <ClickerButton />
    </div>
  );
};
