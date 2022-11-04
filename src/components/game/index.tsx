import React, {useEffect,useState,useContext} from 'react';
import {ContainerQuiz,ContainerDemo,Align_large,Btn_Demo,Align_Page,Align_Title} from 'src/styles/pages/styles';
import { Category, QuizContextType, Player, RoundsResult, Round, Quest, QuestOption, AnswerRequest, Answer } from '../../@types/quiz'
import { QuizContext } from '../../contexts/quizContext'
import api from 'src/services/api';
import Result from '../result';

type ISelect = {
  opt_id : number;
  status: boolean|undefined;
};

const Game : React.FC = () => {
  const { round, saveAnswer } = React.useContext(QuizContext) as QuizContextType;
  const [quests, setQuests] = useState<Quest[]>([]);
  const [actual, setActual] = useState<number>(1);
  const [limit, setLimit] = useState<number>(0);
  const [answers, setAnswers] = useState<number>(0);
  const [closed, setClosed] = useState<boolean>(false);
  const [resultRound, setResultRound] = useState <RoundsResult|null>(null)
  const [select, setSelect] = useState <ISelect|null>(null);

  useEffect(() => {
   getQuests();
  }, [])
  
  const getQuests = () => 
  {
    if (round?.questions) {
      setQuests(round.questions);
      setLimit(round.questions.length);
      const storageQuest = localStorage.getItem('gqtq3s');
      if (typeof storageQuest === "string") {
        setActual(parseInt(storageQuest));
      }
      const storageClose = localStorage.getItem('gqtf3s');
      if (typeof storageClose === "string") {
        if (storageClose === 'true') {finalize();} 
      }
      let correct: number = 0;
      if (round?.answers !== undefined) {
        round?.answers.map((itm: Answer) => {
          if (itm.correct) { correct = correct + 1 }
        });
      }
      setAnswers(correct);
    }
  }

  const processAnswer = async (opt: QuestOption) => {
    try {
      let answer: AnswerRequest = {
        question_id: quests[actual-1].id,
        option_id:  opt.id,
      }
      const result = await saveAnswer(answer);
      if (result !== null) {
         setSelect({
            opt_id: opt.id,
            status: result?.correct
          })
        if (result?.correct === true) {
          setAnswers(answers + 1);
        }
        await sleep(1000);
        next();
      }
    } catch (error) {
      console.error
    }
  }
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  const next = () => {
    
    if (actual < limit) {
      let newActual = actual + 1;
      setActual(newActual);
      localStorage.setItem('gqtq3s',''+newActual);
    } else {
      finalize();
    }
  };

  const finalize = async () => {
    try {
      setClosed(true);
      localStorage.setItem('gqtf3s', 'true');
      const {data:{round:roundData}} = await api.get(`rounds/${round?.id}/result`);
      setResultRound(roundData);
      console.log(roundData, ' . game');
    } catch (error: any) {
      console.error(error.error);
    }
  }



  return (
    <ContainerQuiz>
    
      {quests.length === 0 ? (<h3>Carregando Perguntas</h3>) : (
       <React.Fragment>
          {closed === true ? (<Result resultRound={resultRound}/>) : (
            <ContainerDemo>
               <Align_large><label>Quiz App</label> </Align_large>
              <Align_Page>
                <span>{actual}/{limit}</span>
                <span>Certas: {answers}</span>
              </Align_Page>
              <Align_large>
                <Align_Title> {quests[actual - 1].description}</Align_Title>
                {quests[actual - 1].options.map((opt: QuestOption) => {
                  return (
                    <Align_large key={`${quests[actual - 1].id}-opt-${opt.id}`}>
                      <Btn_Demo style={{
                        backgroundColor: select?.opt_id === opt.id ? (
                          select.status === true ? 'green' : 'red'
                        ) : 'transparent'
                      }} onClick={() => processAnswer(opt)}>{opt.label}</Btn_Demo>
                    </Align_large>
                  )
                })}
              </Align_large>
            </ContainerDemo>
        )}
       </React.Fragment> 
      )}
    </ContainerQuiz>
  );
}

export default Game;

