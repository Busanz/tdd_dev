import { memoryCards } from '@/data/data';
import { MemoryCardType } from '@/data/data';

type CardProps = {
  cardArray: MemoryCardType[];
  setSelectedCards: (card: MemoryCardType[]) => void;
  selectedCards: MemoryCardType[];
  isLocked: boolean;
  setIsLocked: (value: boolean) => void;
};

const Card = ({
  cardArray,
  setSelectedCards,
  selectedCards,
  isLocked,
  setIsLocked,
}: CardProps) => {
  const handleClickCard = (card: MemoryCardType) => {
    isLocked = true;
  };
  return (
    <div>
      {memoryCards.map((item) => (
        <div key={item.id}>
          <img
            data-testid="card-image"
            src={
              item.status === 'flipped' || item.status === 'paired'
                ? item.image
                : 'cardBack.png'
            }
            alt={`Card image ${item.name}`}
            width={100}
            height={200}
          />
        </div>
      ))}
    </div>
  );
};

export default Card;
