import Options from "./Options";

/**
 * The Question component renders a question and its options, and allows the user to select an answer.
 * @returns The Question component is being returned.
 */
function Question({ question, dispatch, answer }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
