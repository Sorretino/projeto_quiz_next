import React, { useEffect, useState, Fragment } from 'react'
import {ContainerQuiz,ContainerDemo,ResultFinal,ResultStart,Final_Loading,Final_Title,Align_Btn,AlignCenter, Btn_Start} from '../../styles/pages/styles'
import { QuizContextType,RoundsResult } from '../../@types/quiz'
import { QuizContext } from '../../contexts/quizContext'
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

type roundsProp = {
  resultRound: RoundsResult |null;
}

const Result: React.FC<roundsProp> = ({ resultRound }):JSX.Element => {
  const { resetQuiz } = React.useContext(QuizContext) as QuizContextType;
  const [percentage, setPercentage] = useState<number>(0);
  const [corrects, setCorrects] = useState<number>(0);
  const [stars, setStars] = useState<string[]|null>(null);

  useEffect(() => {
    if (resultRound?.total_questions !== undefined 
      || resultRound?.total_correct_answers !== undefined)
    {
      let calc: number = (100 / resultRound?.total_questions) * resultRound?.total_correct_answers;
      setCorrects(resultRound?.total_correct_answers);
      setPercentage(Math.round(calc));
      const array:string[] = new Array(resultRound?.total_questions).fill('value')
      setStars(array);
    } else {
      setPercentage(0);
    }
  }, [resultRound])
  

  return(
    <ContainerQuiz>
      <ContainerDemo>
    <AlignCenter><label>Resultado</label></AlignCenter>
      {stars === null ? (
          <ResultFinal>
            <Final_Loading>
              Calculando
            </Final_Loading>
           </ResultFinal>
      ) : (
        <Fragment>
          <ResultFinal>
            <Final_Loading>
              <CircularProgressbar value={percentage} text={`${resultRound?.total_correct_answers}/5`} />
            </Final_Loading>
            {/* <Final_Loading>
              <Final_Title>{resultRound?.total_correct_answers}/{resultRound?.total_questions}  </Final_Title>
            </Final_Loading> */}
            <ResultStart> 
              {stars.map((itm,i)=> {
                return (
                  i < corrects ? (
                    <AiFillStar style={{ fontSize: 35,color: "#f7dd43",}}/>
                  ) : (
                      <AiOutlineStar style={{ fontSize: 35, color: "#f7dd43" }} />
                  )
                );
              })}
              </ResultStart>
          </ResultFinal> 
        
          <Align_Btn>
            <Btn_Start onClick={resetQuiz}>Jogar Novamente</Btn_Start>
          </Align_Btn>
        </Fragment>
      )}
      </ContainerDemo>
    </ContainerQuiz>

   
  )
}

export default Result