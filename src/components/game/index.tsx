import React, {useEffect,useState,useContext} from 'react';
import {ContainerQuiz,ContainerDemo,Align_large,Btn_Demo,Align_Page,Align_Title} from '../../styles/pages/styles';
import { Category, QuizContextType, Player, RoundsResult, Round, Quest, QuestOption, AnswerRequest, Answer } from '../../@types/quiz'
import { QuizContext } from '../../contexts/quizContext'

const Game : React.FC = () => {
  const { round, saveAnswer } = React.useContext(QuizContext) as QuizContextType;
  const [quests, setQuests] = useState<Quest[]>([]);
  const [questionId, setQuestionId] = useState<number>(0);
  const [optionId, setOptionId] = useState<number>(0);
  console.log(quests, " quest");
  useEffect(() => {
   getQuests();
  }, [])
  
  const getQuests = () => 
  {
    if (round?.questions) {
      setQuests(round.questions);
    }
  }

  const handleAnswer = async () => {
    if (questionId !== 0 || optionId !== 0) {
    let answer: AnswerRequest = {
      question_id: questionId,
      option_id:  optionId,
    }
    saveAnswer(answer);
  }
  }

  return (
    <ContainerQuiz>
     <Align_large><label>Quiz App</label> </Align_large>
      
      <ContainerDemo>
        <Align_Page>
       <span>1/3</span>
       <span>Certas: 2</span>
        </Align_Page>
      <Align_large>
      {/* <Align_Title> {quests[0].description}l</Align_Title> */}
      </Align_large>
            <Align_large>
            {quests[0]? quests.map((obj) => {
                                  return (
                                    <>
                                     <Align_Title> {obj.description}l</Align_Title>
                                    </>
                                  );
                                })
                              : null}
              { quests !== undefined && quests.length > 0&&
                // {quests.length >0 &&
                //   quests.map((quest:Quest)=>{
                //    return(
                //      <Align_Title> {quest[0].description}l</Align_Title>
                //    )
                //   })
                //    }
              quests[0].options.map((obj) =>{
                return(
                  <>
              
                  <Align_large key={obj.id}>
                <Btn_Demo >{obj.label}</Btn_Demo>
              </Align_large>
                  </>
                 
                );
              
              })}
              </Align_large>
      
  
      </ContainerDemo>
    </ContainerQuiz>
  );
}

export default Game;