import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";

/**
 * The Question component renders a question and its options, and allows the user to select an answer.
 * @returns The Question component is being returned.
 */
function Question() {
  const { questions, index } = useQuiz();
  const question = questions.at(index);

  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} />
    </div>
  );
}

export default Question;
