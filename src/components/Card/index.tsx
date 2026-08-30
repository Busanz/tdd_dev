'use client';
import { MemoryCardType } from '@/data/data';
import { useState } from 'react';

type CardProps = {
  cardArray: MemoryCardType[];
  setSelectedCards: (card: MemoryCardType[]) => void;
  selectedCards: MemoryCardType[];
  isLocked: boolean;
  setIsLocked: (value: boolean) => void;
};

const Card = ({
  setSelectedCards,
  selectedCards,
  cardArray,
  isLocked,
}: CardProps) => {
  const handleClickOnCard = (clickedCard: MemoryCardType) => {
    if (isLocked) return;
    if (clickedCard.status === 'paired' || clickedCard.status === 'flipped')
      return;

    const currentClickedCard = selectedCards.some(
      (card) => card.id === clickedCard.id,
    );

    if (currentClickedCard) return;
    if (selectedCards.length === 2) return;
    setSelectedCards([...selectedCards, { ...clickedCard, status: 'flipped' }]);
  };
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 grid-rows-4 sm:grid-rows-2 gap-1 sm:gap-3 w-full place-items-center max-w-100 sm:max-w-200 sm:min-h-95 cursor-pointer">
      {cardArray.map((card) => {
        const isSelected = selectedCards.some((item) => item.id === card.id);
        const displayImage =
          card.status === 'paired' || isSelected ? card.image : 'cardBack.png';
        const altImage =
          card.status === 'paired' || card.status === 'flipped'
            ? `${card.name}`
            : 'cardBack';

        return (
          <div
            key={card.id}
            aria-label={card.name}
            className="flex justify-center min-w-40 perspective:[1000px]"
            onClick={() => {
              handleClickOnCard(card);
            }}
          >
            <img
              data-testid="card-image"
              src={displayImage}
              alt={altImage}
              width={130}
              height={200}
            />
          </div>
        );
      })}
    </div>
  );
};
export default Card;
