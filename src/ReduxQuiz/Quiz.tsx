import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/slice/index";
import {
  startQuiz,
  setCurrentQuestionIndex,
  setSelectedAnswer,
  increaseScore,
  saveScore,
  setQuizCompleted,
} from "../store/slice/quizSlice";
import QuestionsData from "../data/QuestionsData";
import NavBar from "./NavBar";
import AnswerQuiz from "./AnswerQuiz";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import moon1 from "./img/full-moon.gif";
import wolf from "./img/wolff.gif";
const Quiz = () => {
  const dispatch = useDispatch(); // กำหนดdispatchเพื่อdispatchactions ไปยังstore
  const {
    // hook ดึงค่าstateต่างๆจากstore
    started,
    currentQuestionIndex,
    selectedAnswer,
    score,
    quizCompleted,
  } = useSelector((state: RootState) => state.quiz);

  // function startQuiz
  const handleStartQuiz = () => {
    dispatch(startQuiz());
  };

  // functionส่งคำตอบ
  const handleAnswerSubmit = () => {
    const currentQuestion = QuestionsData[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.answer) {
      // ตรวจสอบว่าคำตอบที่เลือกถูกต้องมั้ย
      dispatch(increaseScore()); // เพิ่มคะแนน
    }
    if (currentQuestionIndex < QuestionsData.length - 1) {
      dispatch(setCurrentQuestionIndex(currentQuestionIndex + 1));
      dispatch(setSelectedAnswer(""));
    } else {
      dispatch(saveScore()); // บันทึกคะแนน
      dispatch(setQuizCompleted(true));
    }
  };

  const handleRestartQuiz = () => {
    dispatch(startQuiz());
    dispatch(setCurrentQuestionIndex(0));
    dispatch(setSelectedAnswer(""));
    dispatch(setQuizCompleted(false));
  };

  return (
    <>
      <div className="Container w-[full] h-[100vh]">
        {" "}
        <div className="w-[full] h-[full]">
          {" "}
          <NavBar />
          <div className="max-w-7xl h-[calc(100vh - 64px)] mx-auto py-2 sm:px-6 lg:px-8">
            {" "}
            <motion.div
              className="box"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Card className="w-full h-[510px] shadow-[0px_5px_13px_14px_black] dark:border-lime-500  dark:shadow-[0px_0px_15px_8px_#84CC16] bg-bgligt3 dark:bg-bgdark4 bg-cover ">
                {" "}
                <CardContent className="flex justify-center items-center mr-10 mt-1 px-2 h-full ">
                  {" "}
                  <div>
                    {!started ? (
                      <button
                        className="text-[17px] text-red-950 animate-bounce dark:text-lime-500 p-2 bottom-[-380px]  rounded-xl font-extrabold bg-white  mt-4 hover:bg-red-950 hover:dark:bg-fuchsia-500 hover:text-white border-2 hover:dark:text-white dark:border-fuchsia-400 border-yellow-500 shadow-[0px_0px_15px_14px_black] dark:shadow-[0px_0px_15px_3px_white] hover:dark:border-lime-500 "
                        onClick={handleStartQuiz}
                      >
                        Quiz Start
                      </button>
                    ) : (
                      <motion.div
                        className="box"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.8,
                          delay: 1.5,
                          ease: [0, 0.71, 0.2, 1.01],
                        }}
                      >
                        <div>
                          {quizCompleted ? (
                            <AnswerQuiz
                              score={score}
                              totalQuestions={QuestionsData.length}
                              handleRestartQuiz={handleRestartQuiz}
                            />
                          ) : (
                            <>
                              <CardHeader>
                                <CardTitle className="text-[20px] w-[1000px] text-center shadow-[0px__5px_15px_15px_black] bg-white dark:border-2 dark:border-lime-500 rounded-xl text-white  p-5  dark:text-white bg-opacity-30">
                                  {" "}
                                  <h2>
                                    Question {currentQuestionIndex + 1}
                                  </h2>{" "}
                                  <p>
                                    {
                                      QuestionsData[currentQuestionIndex]
                                        .question
                                    }{" "}
                                  </p>
                                </CardTitle>
                              </CardHeader>
                              <motion.div
                                className="invisible dark:visible"
                                animate={{ y: -16 }}
                                transition={{
                                  duration: 3,
                                  repeat: Infinity,
                                  repeatType: "mirror",
                                  ease: "easeInOut",
                                }}
                              >
                                <img
                                  className="absolute  w-40 left-[1090px] top-[-10px] "
                                  src={moon1}
                                  alt=""
                                />
                              </motion.div>
                              <motion.div
                                className="invisible dark:visible"
                                animate={{ y: -16 }}
                                transition={{
                                  duration: 3,
                                  repeat: Infinity,
                                  repeatType: "mirror",
                                  ease: "easeInOut",
                                }}
                              >
                                <img
                                  className="absolute  w-42 left-[1030px] top-[140px] "
                                  src={wolf}
                                  alt=""
                                />
                              </motion.div>
                              <CardDescription>
                                <div className="flex flex-col text-[16px] font-semibold text-white bg-white bg-opacity-30 mx-5 rounded-xl dark:border-2 shadow-[0px__5px_15px_15px_black] dark:border-lime-500">
                                  {" "}
                                  {["A", "B", "C", "D"].map((option) => (
                                    <label className="p-5   " key={option}>
                                      <input
                                        type="radio"
                                        value={option}
                                        checked={selectedAnswer === option}
                                        onChange={(e) =>
                                          dispatch(
                                            setSelectedAnswer(e.target.value)
                                          )
                                        }
                                      />
                                      {
                                        QuestionsData[currentQuestionIndex][
                                          option
                                        ]
                                      }{" "}
                                    </label>
                                  ))}
                                </div>
                              </CardDescription>
                              <CardFooter className="grid grid-cols-1 items-center my-3">
                                {" "}
                                <div className=" flex justify-between px-4 w-full my-3 gap-1  "></div>{" "}
                                <div className="w-full text-center  bg-white rounded-lg p-1 border-2  text-red-500 font-bold cursor-pointer border-yellow-500 hover:bg-red-950 hover:text-white hover:shadow-[0px_0px_13px_3px_white] dark:border-lime-500 dark:shadow-[0px_0px_15px_1px_#84CC16] dark:text-white dark:bg-fuchsia-500 hover:dark:bg-lime-500 hover:dark:text-white hover:dark:border-fuchsia-500 hover:dark:shadow-[0px_0px_15px_3px_#D946EF] shadow-[0px_0px_15px_4px_black] dark:bg-opacity-30">
                                  {" "}
                                  <button
                                    className="w-full"
                                    onClick={handleAnswerSubmit}
                                  >
                                    Submit Death Answer
                                  </button>
                                </div>
                              </CardFooter>
                            </>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </CardContent>
              </Card>
              <div></div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
