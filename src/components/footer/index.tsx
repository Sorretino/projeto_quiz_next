import React from 'react'
import {ContainerFooter,BgImgFooter,Title_Footer} from '../../styles/pages/styles'
const Footer : React.FC = () => {

  return(
   
    <ContainerFooter>
    <Title_Footer><label>Jogo Quiz conhecimentos</label>
    </Title_Footer>
    <BgImgFooter
     
     src="https://img.quizur.com/f/img62e8fbb06ef6f4.59029312.png?lastEdited=165943595/"
     alt="Picture knowledge"
     width={300}
     height={300}
    
   />
    </ContainerFooter>

   
  )
}

export default Footer