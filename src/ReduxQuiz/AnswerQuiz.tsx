import { useSelector } from "react-redux";
import { RootState } from "../store/slice";
import { motion } from "framer-motion";
import bird from "./img/bird.gif";
interface AnswerQuizProps {
  score: number;
  totalQuestions: number;
  handleRestartQuiz: () => void;
}

const AnswerQuiz = ({ totalQuestions, handleRestartQuiz }: AnswerQuizProps) => {
  //useSelector เข้าถึงคะแนนใหม่เอี่ยมอ่อง
  const recentScore = useSelector(
    (state: RootState) => state.quiz.recentScores[0]
  );

  return (
    <div className="flex  flex-col p-10 w-[800px] h-[450px] rounded-2xl  shadow-[0px_3px_15px_16px_black] items-center justify-between bg-bglight3 bg-cover dark:bg-bgdark5 text-center">
      <h2 className="text-[25px] font-bold text-white bg-bgligt3 dark:bg-bgdark5  p-2 rounded-xl    dark:border-lime-500">
        Your Death Score
      </h2>
      <div className="text-[90px] flex items-center justify-center  text-yellow-500 w-[400px] h-[400px] my-6 bg-bgligt3 p-10 font-extrabold rounded-lg bg-opacity-30 shadow-[0px_5px_15px_16px_black] dark:bg-bgdark4">
        <p>
          {recentScore} / {totalQuestions}
        </p>
      </div>
      <button
        className="border-2 border-red-950 px-2 my-5 animate-bounce text-white hover:bg-white bg-red-950  shadow-[0px_0px_14px_4px_white] hover:text-red-500 rounded-lg dark:border-lime-500 dark:bg-white dark:text-fuchsia-500 font-extrabold hover:dark:bg-fuchsia-500 hover:dark:text-white"
        onClick={handleRestartQuiz}
      >
        Try again Quiz
      </button>
    </div>
  );
};

export default AnswerQuiz;
