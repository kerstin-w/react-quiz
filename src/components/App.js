import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import Timer from "./Timer";
import { useQuiz } from "../contexts/QuizContext";

/**
 * The `App` function is the main component of a quiz application that manages the state and rendering
 * of different screens based on the current status of the quiz.
 * @returns The `App` component is returning a JSX structure that represents the user interface of the
 * application. It includes a `div` element with the class name "app" as the root element. Inside the
 * `div`, there is a `Header` component, a `Main` component, and different components rendered based on
 * the value of the `status` variable.
 */
export default function App() {
  const { status } = useQuiz();
  return (
    <div className="app">
      <Header />

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === "finished" && <FinishScreen />}
      </Main>
    </div>
  );
}
