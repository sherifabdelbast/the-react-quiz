function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          key={option}
          disabled={hasAnswered}
          className={`btn btn-option
            ${index === answer ? "answer" : ""}
            ${hasAnswered && index === question.correctOption ? "correct" : ""}
            ${
              hasAnswered &&
              index === answer &&
              index !== question.correctOption
                ? "wrong"
                : ""
            }
          `}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
