/**
 * The StartScreen function renders a start screen for a React quiz, displaying the number of questions
 * and a button to start the quiz.
 * @returns The StartScreen component is returning a JSX element.
 */
function StartScreen({ numQuestions }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button className="btn btn-ui">Let's start</button>
    </div>
  );
}

export default StartScreen;
