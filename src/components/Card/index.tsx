'use client';
import { MemoryCardType } from '@/data/data';

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
    <div className="flex justify-center gap-6 w-full cursor-pointer">
      {cardArray.map((card) => {
        const isSelected = selectedCards.some((c) => c.id === card.id);
        const displayImage =
          card.status === 'paired' || isSelected ? card.image : 'cardBack.png';
        const altImage =
          card.status === 'paired' || card.status === 'flipped'
            ? `Card image ${card.name}`
            : 'Card back image';
        return (
          <div key={card.id} data-testid="board">
            <img
              data-testid="card-image"
              src={displayImage}
              width={100}
              alt={altImage}
              height={200}
              onClick={() => {
                handleClickOnCard(card);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};
export default Card;
