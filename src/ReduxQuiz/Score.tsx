import { useSelector } from "react-redux";
import { RootState } from "../store/slice/index";
import NavBar from "./NavBar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
const Score = () => {
  // ดึง recentScores จากstore
  const recentScores = useSelector((state: RootState) => {
    const scores = state.quiz.recentScores.slice(0, 10);
    if (scores.length <= 10) {
      return scores;
    } else {
      scores.shift();
      return scores;
    }
  });

  return (
    <>
      <div className="Container w-[full] h-[100vh]">
        <div className="w-[full] h-[full]">
          <NavBar />
          <div className="max-w-7xl h-[calc(100vh - 64px)] mx-auto py-6 sm:px-6 lg:px-8">
            <motion.div
              className="box"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Card className="border-4 border-red-950 shadow-[0px_5px_15px_15px_black] dark:border-lime-500 dark:shadow-[0px_0px_15px_8px_#84CC16] bg-bglight dark:bg-bgdark5   ">
                <CardContent className="flex flex-col justify-center items-center  mt-1 px-2 ">
                  <CardHeader>
                    {" "}
                    <CardTitle className="text-[20px]  text-center bg-bgligt3 dark:bg-bgdark4 dark:bg-opacity-30 dark:bordr-2  dark:border-lime-500 rounded-xl text-yellow-500  p-5  dark:text-fuchsia-500  w-[800px] h-[auto]">
                      {" "}
                      <h2 className="bg-bglight dark:bg-bgdark5 dark:border-2 dark:border-lime-500 rounded-lg text-white">
                        List Scores
                      </h2>{" "}
                    </CardTitle>
                  </CardHeader>
                  <CardDescription className="text-[20px]  text-center bg-bgligt3 dark:bg-bgdark4  dark:bg-opacity-30 dark:bordr-2 dark:border-lime-500 rounded-xl text-yellow-500  p-5  dark:text-fuchsia-500  w-[800px] h-[auto]">
                    <div className=" overflow-auto     text-left px-8 dark:bg-bgdark5 bg-opacity-80 h-[250px] w-[750px] rounded-xl dark:border-2 dark:border-lime-500 mt-3">
                      <ul>
                        {recentScores.map((score, index) => (
                          <li
                            className="font-bold text-white pt-5 text-[25px] dark:text-white "
                            key={index}
                          >
                            {index + 1}. {score}
                          </li>
                        ))}
                      </ul>{" "}
                    </div>
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Score;
