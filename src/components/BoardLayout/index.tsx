'use client';
import { useEffect, useState } from 'react';
import Card from '../Card';
import { MemoryCardType, shuffleCards } from '@/data/data';

type BoardLayoutProps = {
  setShowResults: (isShowResult: boolean) => void;
};

const BoardLayout = ({ setShowResults }: BoardLayoutProps) => {
  const [cards, setCards] = useState<MemoryCardType[]>(() => shuffleCards());
  const [selectedCards, setSelectedCards] = useState<MemoryCardType[]>([]);
  const [isLocked, setIsLocked] = useState<boolean>(false);

  useEffect(() => {
    if (selectedCards.length === 1) {
      const oneClickTimer = setTimeout(() => {
        const [firstCard] = selectedCards;
        setCards((currentCard) =>
          currentCard.map((card) => {
            if (card.name === firstCard.name) {
              return {
                ...card,
                status: 'unflipped',
              };
            }
            return card;
          }),
        );
        setSelectedCards([]);
      }, 1000);
      return () => {
        clearTimeout(oneClickTimer);
      };
    } else if (selectedCards.length === 2) {
      setIsLocked(true);

      const gameTimer = setTimeout(() => {
        const [firstCard, secondCard] = selectedCards;

        const setCardStatus = (newstatus: string) => {
          setCards((currentCard) =>
            currentCard.map((card) => {
              if (
                card.name === firstCard.name ||
                card.name === secondCard.name
              ) {
                return { ...card, status: newstatus };
              }
              return card;
            }),
          );
        };

        if (firstCard.name === secondCard.name) {
          setCardStatus('paired');
        } else {
          setCardStatus('unflipped');
        }
        setSelectedCards([]);
        setIsLocked(false);
      }, 1000);
      return () => {
        clearTimeout(gameTimer);
      };
    } else {
      return;
    }
  }, [selectedCards]);

  useEffect(() => {
    if (cards.length === 0) {
      setShowResults(false);
      return;
    }
    const isAllCardsPaired = cards.every((card) => card.status === 'paired');
    console.log(isAllCardsPaired);
    console.log(cards);
    setShowResults(isAllCardsPaired);
  }, [cards, selectedCards]);
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <Card
        cardArray={cards}
        isLocked={isLocked}
        setIsLocked={setIsLocked}
        setSelectedCards={setSelectedCards}
        selectedCards={selectedCards}
      />
    </div>
  );
};

export default BoardLayout;
