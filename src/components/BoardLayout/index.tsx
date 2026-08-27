import Card from '../Card';
import { memoryCards } from '@/data/data';
import { MemoryCardType } from '@/data/data';

type BoardLayoutProps = {
  setShowResults: () => void;

  cardArray: MemoryCardType[];
  setSelectedCards: () => void;
  selectedCards: MemoryCardType[];
  isLocked: boolean;
  setIsLocked: (value: boolean) => void;
};

const BoardLayout = ({
  setShowResults,
  cardArray,
  setSelectedCards,
  selectedCards,
  isLocked,
  setIsLocked,
}: BoardLayoutProps) => {
  return <div>{<Card />}</div>;
};

export default BoardLayout;
