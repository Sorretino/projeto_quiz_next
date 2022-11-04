import '../styles/globals.css'

import * as React from 'react'
import QuizProvider from '../contexts/quizContext'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QuizProvider>
      <Component {...pageProps} />
    </QuizProvider>
    )
}
