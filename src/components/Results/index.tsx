type ResultsProps = {
  setShowResults: (value: boolean) => void;
};

const Results = ({ setShowResults }: ResultsProps) => {
  return (
    <div
      data-testid="results-container"
      className="flex flex-col justify-center items-center my-10 font-extralight gap-4"
    >
      <h2 className="text-3xl text-center">
        Congratulations, you matched them all!
      </h2>
      <p className="text-lg text-center mt-5">
        Nice work, you found every pair. Ready for another round? Hit play again
        to reshuffle the deck and go again.
      </p>
      <button
        className="bg-indigo-400 text-white px-14 py-4 rounded-2xl text-2xl border-white border mt-10 cursor-pointer"
        data-testid="restart-button"
        onClick={() => setShowResults(false)}
      >
        Play again
      </button>
    </div>
  );
};

export default Results;
