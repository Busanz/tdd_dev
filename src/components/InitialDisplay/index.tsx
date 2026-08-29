import Footer from '@/components/Footer';
import Header from '@/components/Header';

type InitialDisplayProps = {
  setGameStart: (isStarted: boolean) => void;
};

const InitialDisplay = ({ setGameStart }: InitialDisplayProps) => {
  return (
    <div
      className="flex flex-col items-center justify-between my-10 w-full h-full"
      data-testid="initial-display"
    >
      <Header />
      <h2 className="text-2xl pb-10">Get started</h2>
      <button
        className="bg-indigo-500 text-white px-13 py-2 cursor-pointer text-2xl font-light rounded-2xl mb-10"
        data-testid="start-button"
        onClick={() => {
          setGameStart(true);
        }}
      >
        Start
      </button>
      <p data-testid="instructions">
        To play, click one card at a time, only two cards can be flipped per
        turn, match all the pairs to win
      </p>

      <Footer />
    </div>
  );
};

export default InitialDisplay;
