'use client';

import InitialDisplay from '@/components/InitialDisplay';
import BoardLayout from '@/components/BoardLayout';
import Results from '@/components/Results';
import { useEffect, useState } from 'react';

export default function Home() {
  const [gameStart, setGameStart] = useState<boolean>(false);
  const [showResult, setShowResults] = useState<boolean>(false);

  return (
    <div className="flex bg-indigo-900 text-white w-full h-screen items-center">
      <main className="flex flex-col items-center w-full">
        {!gameStart && <InitialDisplay setGameStart={setGameStart} />}
        {gameStart && !showResult && (
          <BoardLayout setShowResults={setShowResults} />
        )}
        {showResult && <Results setShowResults={setShowResults} />}
      </main>
    </div>
  );
}
