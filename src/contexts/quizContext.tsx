import React, { createContext, FC, ComponentElement, useState, useEffect } from 'react'
import api from '../services/api'
import { QuizContextType, Player, AnswerRequest, Round, Answer } from '../@types/quiz'

export const QuizContext = React.createContext<QuizContextType | null>(null);

type WithChildren<T = {}> = T & { children?: React.ReactNode };

const QuizProvider: FC<WithChildren> = ({children}) => {
  const [player, setPlayer] = useState<Player | null>(null);
  const [round, setRound] = useState<Round | null>(null);

  useEffect(() => {
   verifySession();
  }, [])
  
  const verifySession = () => {
    const storagePlayer = localStorage.getItem('gqtu3s');
    const storageRound = localStorage.getItem('gqtr3s');
    //const storageQuest = localStorage.getItem('gqtq3s');
    if (typeof storagePlayer === 'string'){
      let sessionPlayer: Player = JSON.parse(storagePlayer) as Player;
      setPlayer(sessionPlayer);
    }
    if (typeof storageRound === 'string') {
      let sessionRound: Round = JSON.parse(storageRound) as Round;
      setRound(sessionRound);
    }
  }

  const startQuiz = async (playData: Player) => {
    try {
      const { data:{round:roundData} } = await api.post(`rounds`, {
        round: {
          player_name: playData.name,
          category_id: playData.category_id,
        },
      });
      let var_player: Player = {
          id: roundData.player_id,
          name: playData.name,
          category_id: playData.category_id,
          category_name: playData.category_name,
      };
      localStorage.setItem('gqtu3s',JSON.stringify(var_player));
      localStorage.setItem('gqtr3s', JSON.stringify(roundData));
      localStorage.setItem('gqtq3s', "1");
      setPlayer(var_player);
      setRound(roundData);
      return roundData;
    } catch (error: any) {
      console.error(error.error);
      return null;
    }
  }

  const saveAnswer:Promise<Answer|void> = async (answer: AnswerRequest) => {
    try {
      const { data: { answer:answerData}} = await api.post(`rounds/${round?.id}/answers`, {
        answer: {
          question_id: answer.question_id,
          option_id: answer.option_id,
        },
      });
      return answerData;
    } catch (error: any) {
      console.error(error.error);
      return null;
    }
  };

  const resetQuiz = () => {
    localStorage.clear();
    setPlayer(null);
  }

  
  return (
    <QuizContext.Provider value={{ player, round, saveAnswer, startQuiz, resetQuiz}}>
      {children}
    </QuizContext.Provider>
  );
};


export default QuizProvider;
