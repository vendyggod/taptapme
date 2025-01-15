import { SCORE_PER_CLICK, USER_ID } from '../../shared/consts';
import { Score } from '../../shared/types';
import { supabase } from '../supabase/supabase';

export const getScore = async (): Promise<Score> => {
  const { data, error } = await supabase
    .from('users')
    .select('score')
    .eq('id', USER_ID)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const addScore = async (): Promise<void> => {
  const { score: currentScore } = await getScore();
  console.log(currentScore);

  const { error } = await supabase
    .from('users')
    .update({
      score: currentScore + SCORE_PER_CLICK,
    })
    .eq('id', USER_ID);

  if (error) {
    throw new Error(error.message);
  }
};
