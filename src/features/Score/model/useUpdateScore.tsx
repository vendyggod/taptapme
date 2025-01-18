import { addScore } from '../../../../services/apis/api';
import {useMutation} from "@tanstack/react-query";

export const useUpdateScore = () => {
  const { mutate: updateScore, isLoading: isUpdating } = useMutation({
    mutationFn: () => addScore(),

    onError: (error) => console.log(error),
  });

  return { updateScore, isUpdating };
};