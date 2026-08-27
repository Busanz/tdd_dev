type ResultsProps = {
  setShowResults: (value: boolean) => void;
};

const Results = ({ setShowResults }: ResultsProps) => {
  return (
    <div data-testid="results-container">
      <button
        data-testid="restart-button"
        onClick={() => setShowResults(false)}
      >
        play again
      </button>
    </div>
  );
};

export default Results;
