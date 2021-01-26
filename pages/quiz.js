import React from 'react';
import { useRouter } from 'next/router';

export default function QuizPage() {
  const router = useRouter();

  return (
    <div>
      <button type="button" onClick={() => router.push('/')}>
        voltar
      </button>
    </div>
  );
}
