import { memoryCards } from '@/data/data';

type BoardLayoutProps = {
  setShowResults: () => void;
};

const BoardLayout = ({ setShowResults }: BoardLayoutProps) => {
  return (
    <div>
      {memoryCards.map((item) => (
        <div key={item.id} data-testid="card-image">
          <img
            src={item.image}
            alt={`Card image ${item.name}`}
            width={100}
            height={200}
          />
        </div>
      ))}
    </div>
  );
};

export default BoardLayout;
