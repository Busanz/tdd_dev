import Footer from '@/components/Footer';
import Header from '@/components/Header';

type InitialDisplayProps = {
  setGameStart: (isStarted: boolean) => void;
};

const InitialDisplay = ({ setGameStart }: InitialDisplayProps) => {
  return (
    <div className="flex flex-col items-center my-10">
      <Header />
      <h2>Get started</h2>
      <p data-testid="instructions">
        To play, click one card at a time, only two cards can be flipped per
        turn, match all the pairs to win
      </p>
      <button
        className="bg-black text-white px-10 py-2 cursor-pointer text-2xl"
        data-testid="start-button"
        onClick={() => {
          setGameStart(true);
        }}
      >
        Start
      </button>
      <Footer />
    </div>
  );
};

export default InitialDisplay;
