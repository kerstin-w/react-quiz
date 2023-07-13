/**
 * The NextButton component renders a button that triggers a dispatch action when clicked, but only if
 * the answer is not null.
 * @returns The NextButton component is being returned.
 */
function NextButton({ dispatch, answer }) {
  if (answer === null) return null;
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next
    </button>
  );
}

export default NextButton;
