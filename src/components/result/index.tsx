import React, {useContext} from 'react'
import Image from 'next/image'
import {ContainerQuiz,ContainerDemo,ResultFinal,ResultStart,Final_Loading,Final_Title,Align_Btn,AlignCenter, Btn_Start} from '../../styles/pages/styles'
import { QuizContextType,RoundsResult } from '../../@types/quiz'
import { QuizContext } from '../../contexts/quizContext'
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';




type roundsProp = {
  resultRound: RoundsResult |null;
}
const percentage = 80;
const Result: React.FC<roundsProp> = ({ resultRound }):JSX.Element => {
  const { resetQuiz } = React.useContext(QuizContext) as QuizContextType;
  return(
    <ContainerQuiz>
      <ContainerDemo>
    <AlignCenter><label>Resultado</label></AlignCenter>
      <ResultFinal>
      <Final_Loading>
      <CircularProgressbar value={percentage} text={`${percentage}%`} />
      </Final_Loading>
        <Final_Loading>
        <Final_Title>{resultRound?.total_correct_answers}/{resultRound?.total_questions}  </Final_Title>
        </Final_Loading>
        <ResultStart> 
          <AiFillStar style={{ fontSize: 35,color: "#f7dd43",}}/>
          <AiFillStar style={{ fontSize: 35,color: "#f7dd43",}}/>
          <AiFillStar style={{ fontSize: 35,color: "#f7dd43",}}/>
          <AiOutlineStar style={{ fontSize: 35, color:"#f7dd43"}}/>
          <AiOutlineStar style={{ fontSize: 35,color:"#f7dd43"}}/>
          </ResultStart>
       </ResultFinal> 
    
      <Align_Btn>
        <Btn_Start onClick={resetQuiz}>Jogar Novamente</Btn_Start>
      </Align_Btn>
      </ContainerDemo>
    </ContainerQuiz>

   
  )
}

export default Result