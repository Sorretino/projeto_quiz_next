import React, {useEffect, useState, useContext} from 'react'
import {ContainerQuiz,
  ContainerDemo,
  Ipt_Player,
  Align_Btn,
  Btn_Start,
  SelectGame,
  AlignCenter,
  Align_large,
  CustonSelects,
  DroSeletsF,
  SelectsOptionsF} from '../../styles/pages/styles'
import api from '../../services/api'
import { Category, QuizContextType, Player } from '../../@types/quiz'
import { QuizContext } from '../../contexts/quizContext'

const PlayerIdentify : React.FC = () => {
  const { startQuiz,player } = React.useContext(QuizContext) as QuizContextType;
  const [categories, setCategories] = React.useState<Category[]>([]);
  const [playerName, setPlayerName] = React.useState<string> ("");
  const [categoryId, setCategoryId] = React.useState<number>(0);
  const [categoryName, setCategoryName] = React.useState<string>("");

  useEffect(() => {
    getCategories();
  }, [])
  
  const getCategories = async () => {
    try {
        const {data: {categories:categoriesData}} = await api.get('categories');
        setCategories(categoriesData);
      } catch (error: any) {
        console.error(error.error)
      }
  }

  const handleStart = async () => {
    try {
      if (playerName.length > 0 || categoryId !== 0) {
        let playData: Player = {
          id: null,
          name: playerName,
          category_id: categoryId,
          category_name: categoryName
        }
        await startQuiz(playData);
      } else {
        alert('Dados inválidos');
      }

      
    } catch (error: any) {
      console.error(error.error);
    }
  }


  return(
    <ContainerQuiz>
       
    
    <ContainerDemo>
    <AlignCenter><label>Quiz App</label> </AlignCenter>
      <Align_large>
       <label>Jogador: </label> 
       <Ipt_Player placeholder="Nome" id="Name"
        onChange={e => {
          setPlayerName(e.target.value);
        }}/>
      </Align_large>

      <Align_large>
        <label htmlFor='categories'>Categoria:</label>
        <CustonSelects>
          <SelectGame id="categories"
            onChange={e => {
              let values = JSON.parse(e.target.value);
              setCategoryId(parseInt(values.id));
              setCategoryName(values.name);
            }}
            
          >
            <option value={""} key={null} >
              Selecione uma Categoria
            </option>
            {categories.map((category:Category) => {
              return (
                <option key={`opt-${category.id}`} value={JSON.stringify(category)} id={category.name}>{category.name}</option>
              )
            })}
        </SelectGame>
        </CustonSelects>
      </Align_large>
      <Align_Btn>
        {playerName !="" &&
        playerName !=null &&
        playerName.length > 6 &&
        categoryId  != 0 &&
        categoryId != null ? 
        (
          <Btn_Start onClick={handleStart}>Vamos Jogar {playerName}</Btn_Start>
        ):(
          <Btn_Start disabled={true}>Preencha as opções</Btn_Start>
        )}
      </Align_Btn>
      
    </ContainerDemo>

   </ContainerQuiz>
  )
}

export default PlayerIdentify