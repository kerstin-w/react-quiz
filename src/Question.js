import Options from "./components/Options";

function Question({ questions }) {
  return (
    <div>
      <h4>{questions.question}</h4>
      <Options questions={questions} />
    </div>
  );
}

export default Question;
