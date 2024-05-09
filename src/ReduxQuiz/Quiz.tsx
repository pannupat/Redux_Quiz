// Quiz.tsx

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/slice/index';
import { startQuiz, setCurrentQuestionIndex, setSelectedAnswer, increaseScore, saveScore, setQuizCompleted } from '../store/slice/quizSlice';
import QuestionsData from '../data/QuestionsData';
import NavBar from './NavBar';
import AnswerQuiz from './AnswerQuiz';

const Quiz = () => {
  const dispatch = useDispatch();
  const { started, currentQuestionIndex, selectedAnswer, score, quizCompleted } = useSelector((state: RootState) => state.quiz);

  const handleStartQuiz = () => {
    dispatch(startQuiz());
  };

  const handleAnswerSubmit = () => {
    const currentQuestion = QuestionsData[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.answer) {
      dispatch(increaseScore());
    }
    if (currentQuestionIndex < QuestionsData.length - 1) {
      dispatch(setCurrentQuestionIndex(currentQuestionIndex + 1));
      dispatch(setSelectedAnswer(''));
    } else {
      dispatch(saveScore());
      dispatch(setQuizCompleted(true));
    }
  };

  const handleRestartQuiz = () => {
    dispatch(startQuiz()); // Start the quiz again
    dispatch(setCurrentQuestionIndex(0)); // Reset currentQuestionIndex to 0 when restarting the quiz
    dispatch(setSelectedAnswer('')); // Reset selectedAnswer to empty string when restarting the quiz
    dispatch(setQuizCompleted(false)); // Set quizCompleted to false when restarting the quiz
  };

  return (
    <>
      <NavBar />
      <div>
        {!started ? (
          <button onClick={handleStartQuiz}>Start Quiz</button>
        ) : (
          <div>
            {quizCompleted ? (
              <AnswerQuiz score={score} totalQuestions={QuestionsData.length} handleRestartQuiz={handleRestartQuiz} />
            ) : (
              <>
                <h2>Question {currentQuestionIndex + 1}</h2>
                <p>{QuestionsData[currentQuestionIndex].question}</p>
                <div>
                  {['A', 'B', 'C', 'D'].map((option) => (
                    <label key={option}>
                      <input
                        type="radio"
                        value={option}
                        checked={selectedAnswer === option}
                        onChange={(e) => dispatch(setSelectedAnswer(e.target.value))}
                      />
                      {QuestionsData[currentQuestionIndex][option]}
                    </label>
                  ))}
                </div>
                <button onClick={handleAnswerSubmit}>ส่งคำตอบ</button>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Quiz;
