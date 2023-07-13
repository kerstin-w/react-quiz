/**
 * The Progress function is a React component that displays the progress of a quiz or questionnaire,
 * including the current question number, the total number of questions, and the points earned out of
 * the maximum possible points.
 * @returns The Progress component is returning a header element containing a progress bar, the current
 * question number out of the total number of questions, and the current points out of the maximum
 * possible points.
 */
function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> /{maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
