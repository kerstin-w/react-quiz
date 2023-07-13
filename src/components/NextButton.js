/**
 * The NextButton function returns a button component based on the current question index and the
 * number of total questions.
 * @returns The NextButton component is returning a button element. If the answer is null, it returns
 * null. If the index is less than the number of questions minus 1, it returns a "Next" button. If the
 * index is equal to the number of questions minus 1, it returns a "Finish" button.
 */
function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;
  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}

export default NextButton;
