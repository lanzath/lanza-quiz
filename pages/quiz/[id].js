/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';

import QuizScreen from '../../src/screens/Quiz';

export default function QuizDaGaleraPage({ externalDb }) {
  return (
    <ThemeProvider theme={externalDb.theme}>
      <QuizScreen
        externalQuestions={externalDb.questions}
        externalBg={externalDb.bg}
      />
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split('___');

  try {
    const externalDb = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Falha ao buscar dados');
      })
      .then((objectResponse) => objectResponse);

    return {
      // Will be passed to the page component as props
      props: {
        externalDb,
      },
    };
  } catch (error) {
    throw new Error(error);
  }
}
