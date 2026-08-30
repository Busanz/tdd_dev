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
      <p
        data-testid="instructions"
        className="text-center px-5 text-xl font-extralight"
      >
        To play, click one card at a time, only two cards can be flipped per
        turn, match all the pairs to win
      </p>
      <button
        className="bg-indigo-400 text-white px-20 py-3 rounded-2xl text-2xl border-white border mt-10 cursor-pointer font-light"
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
