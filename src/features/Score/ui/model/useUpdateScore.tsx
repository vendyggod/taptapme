import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addScore } from '../../../../services/apis/api';

export const useUpdateScore = () => {
  const queryClient = useQueryClient();
  const { mutate: updateScore, isLoading: isUpdating } = useMutation({
    mutationFn: addScore,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['users'],
      });
    },

    onError: (error) => console.log(error),
  });

  return { updateScore, isUpdating };
};
