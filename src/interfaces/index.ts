export interface Game {
  quest: string;
}

export interface Categorie {
  id: number;
  name: string;
}

export interface QuestOption {
  id: number;
  label: string;
}

export interface Quest {
  id: number;
  description: string;
  options: Array<QuestOption>;
}

export interface Answer {
  id: number;
  question_id: number;
  option_id: number;
  correct: boolean;
}

export interface Round {
  id: number;
  player_id: number;
  questions: Array<Quest>;
  answers: Array<Answer>
}

export interface RoundsResult {
  id: number;
  player_id: number;
  total_questions: number;
  total_answered_questions: number;
  total_correct_answers: number;
}



