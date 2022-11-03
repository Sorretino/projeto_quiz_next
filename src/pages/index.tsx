import * as React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import PlayerIdentify from '../components/player'
import Game from '../components/game'
import { QuizContext } from '../contexts/quizContext'
import { QuizContextType } from '../@types/quiz'

const Home: React.FC = () => {
  const {player} = React.useContext(QuizContext) as QuizContextType;

  return (
    <div className={styles.container}>
      <Head>
        <title>Quiz 3sD</title>
        <meta name="description" content="A quiz game, development by 3S Digital" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {player !== null ? <Game /> : <PlayerIdentify /> }      
      </main>
    </div>
  );
}

export default Home;