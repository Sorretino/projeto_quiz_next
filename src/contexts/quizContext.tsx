import * as React from 'react'
import api from '../services/api'
import { QuizContextType, Player, AnswerRequest, Round } from '../@types/quiz'

export const QuizContext = React.createContext<QuizContextType | null>(null);

const QuizProvider: React.FC = ({children}:React.ComponentElement) => {
  const [player, setPlayer] = React.useState<Player | null>(null);
  const [round, setRound] = React.useState<Round | null>(null);


  const startQuiz = async (playData: Player) => {
    try {
      const { data:{round:roundData} } = await api.post(`rounds`, {
        round: {
          player_name: playData.name,
          category_id: playData.category_id,
        },
      });
      setPlayer({
          id: roundData.player_id,
          name: playData.name,
          category_id: playData.category_id,
          category_name: playData.category_name,
      })
      setRound(roundData);
      return roundData;
    } catch (error: any) {
      console.error(error.error);
      return null;
    }
  }

  const saveAnswer = async (answer: AnswerRequest) => {
    try {
      const {data:{round:roundData}} = await api.post(`rounds/${round?.id}/answers`, {
        answer: {
          question_id: answer.question_id,
          option_id: answer.option_id,
        },
      });

      return roundData;
    } catch (error: any) {
      console.error(error.error);
      return null;
    }
  };

  return (
    <QuizContext.Provider value={{ player, round, saveAnswer, startQuiz }}>
      {children}
    </QuizContext.Provider>
  );
};


export default QuizProvider;
