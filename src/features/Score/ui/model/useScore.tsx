import { useQuery } from '@tanstack/react-query';
import { getScore } from '../../../../services/apis/api';
import { Score } from '../../../../shared/types';

export const useScore = () => {
  const { data, isLoading, error } = useQuery<Score, Error>(['users'], () =>
    getScore()
  );

  const score = data ? data.score : null;

  return { score, isLoading, error };
};
