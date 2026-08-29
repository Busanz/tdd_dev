type ResultsProps = {
  setShowResults: (value: boolean) => void;
};

const Results = ({ setShowResults }: ResultsProps) => {
  return (
    <div
      data-testid="results-container"
      className="flex flex-col justify-center items-center my-10 text-2xl font-extralight gap-4"
    >
      <h2>Results Heading</h2>
      <p>Result paragraph</p>
      <button
        className="bg-indigo-400 text-white px-14 py-4 rounded-2xl"
        data-testid="restart-button"
        onClick={() => setShowResults(false)}
      >
        play again
      </button>
    </div>
  );
};

export default Results;
