/**
 * The StartScreen function is a React component that displays a welcome message and the number of
 * questions in a quiz, and includes a button to start the quiz.
 * @returns The StartScreen component is returning a JSX element.
 */
function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
