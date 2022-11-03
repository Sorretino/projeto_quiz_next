export type QuizContextType = {
  player: Player | null;
  round: Round | null;
  saveAnswer: (answer: AnswerRequest) => Promise<Answer> | Promise<void>;
  startQuiz: (playData: Player) => Promise<Round> | Romise<void>;
  resetQuiz: () => Romise<void>;
};

export type Player = {
  id: number | null;
  name: string;
  category_id: number;
  category_name: string;
};

export type Category = {
  id: number;
  name: string;
};

export type QuestOption = {
  id: number;
  label: string;
};

export type Quest = {
  id: number;
  description: string;
  options: Array<QuestOption>;
};

export type Answer = {
  id: number;
  question_id: number;
  option_id: number;
  correct: boolean;
};

export type AnswerRequest = {
  question_id: number;
  option_id: number;
};

export type Round = {
  id: number;
  player_id: number;
  questions: Array<Quest>;
  answers: Array<Answer>;
};

export type RoundsResult = {
  id: number;
  player_id: number;
  total_questions: number;
  total_answered_questions: number;
  total_correct_answers: number;
};



