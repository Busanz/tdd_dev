'use client';

import InitialDisplay from '@/components/InitialDisplay';
import { useEffect, useState } from 'react';

export default function Home() {
  const [gameStart, setGameStart] = useState(false);

  return (
    <div className="flex bg-pink-200 w-full h-full items-center">
      <main className="flex flex-col items-center w-full">
        <InitialDisplay setGameStart={setGameStart} />
      </main>
    </div>
  );
}
