import NavBar from "./NavBar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
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
              <Card className="border-4 border-red-950 shadow-[0px_5px_15px_15px_black] dark:border-lime-500 dark:shadow-[0px_0px_15px_3px_#D946EF]">
                <CardHeader>
                  <motion.div
                    className="box"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 1,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                  >
                    <CardTitle className="text-[50px] text-center text-red-900 pr-10 dark:text-lime-500">
                      W E L C O M E
                    </CardTitle>
                  </motion.div>
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
                    <CardDescription>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quod, dolor quos consequatur est quia officia excepturi
                      nostrum nemo! Nesciunt exercitationem sint odit obcaecati
                      recusandae eligendi velit vitae! Odit earum aliquid
                      tenetur dolor magni deleniti repellendus, nulla deserunt
                      nobis qui veniam! Odit sequi impedit in, magni suscipit
                      neque autem accusamus fuga eaque officiis tempore dolorem,
                      magnam laborum ad molestiae provident odio recusandae quam
                      reprehenderit! Dignissimos, iure, tempore nobis explicabo
                      temporibus quidem, qui fuga
                    </CardDescription>
                  </motion.div>
                </CardHeader>
                <motion.div
                  className="box"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 2,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <CardContent className="flex justify-center mr-10 mt-5 px-2 ">
                    <Link
                      className="border-4 border-red-950 px-2 shadow-[0px_0px_15px_4px_black] hover:shadow-[0px_0px_15px_4px_red  ] text-red-600 hover:border-yellow-700 hover:bg-red-950 hover:text-white rounded-lg dark:border-lime-500 dark:bg-white dark:text-fuchsia-500 font-extrabold hover:dark:bg-fuchsia-500 hover:dark:text-white"
                      to={"/quiz"}
                    >
                      Let's Quiz
                    </Link>
                  </CardContent>
                </motion.div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
