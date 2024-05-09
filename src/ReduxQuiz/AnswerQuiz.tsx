import { useSelector } from "react-redux";
import { RootState } from "../store/slice";

interface AnswerQuizProps {
  score: number;
  totalQuestions: number;
  handleRestartQuiz: () => void;
}

const AnswerQuiz = ({ totalQuestions, handleRestartQuiz }: AnswerQuizProps) => {

  // ใช้ useSelector เพื่อเข้าถึงคะแนนล่าสุดเท่านั้น
  const recentScore = useSelector((state: RootState) => state.quiz.recentScores[0]);

  return (
    <div>
      <h2>สรุปผลการทดสอบ</h2>
      <p>ได้คะแนน: {recentScore} / {totalQuestions}</p>
      <button onClick={handleRestartQuiz}>ทำแบบทดสอบอีกครั้ง</button>
    </div>
  );
};

export default AnswerQuiz;
