import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import NavBar from "./NavBar";
import { Progress } from "antd";
import { useTheme } from "./ThemeProvider";

const Evaluate = () => {
  const { theme } = useTheme();

  return (
    <>
      <div className="Container w-full h-full ">
        <div className="w-full h-full">
          <NavBar />
          <div className="max-w-7xl h-[calc(100vh - 64px)] mx-auto py-6 sm:px-6 lg:px-8">
            <Card className="border-4 border-red-400 dark:border-lime-500  dark:shadow-[0px_0px_15px_8px_#84CC16] text-red-500 dark:text-lime-500 font-semibold text-center">
              <CardHeader>
                <CardTitle className="text-5xl text-center text-red-950 pr-10 dark:text-lime-500">
                  Evaluate The Course
                </CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center mr-10 mt-5 px-2">
                <div className="w-full">
                  <div>
                    1. Git Version Control{" "}
                    <div className="flex flex-row mb-4 mx-5 gap-4">
                      <Progress
                        percent={90}
                        status="active"
                        showInfo={false}
                        strokeWidth={12}
                        strokeColor={theme === "light" ? "#450A0A" : " #84CC01"}
                        trailColor={theme === "light" ? "#DDDDDD" : "#D946EF"}
                      />{" "}
                      <p>9/10</p>
                    </div>
                  </div>
                  <div>
                    2.Basic JavaScript{" "}
                    <div className="flex flex-row mb-4 mx-5 gap-4">
                      <Progress
                        percent={70}
                        status="active"
                        showInfo={false}
                        strokeWidth={12}
                        strokeColor={theme === "light" ? "#450A0A" : " #84CC01"}
                        trailColor={theme === "light" ? "#DDDDDD" : "#D946EF"}
                      />{" "}
                      <p>7/10</p>
                    </div>
                  </div>
                  <div>
                    3.Basic Typescript
                    <div className="flex flex-row mb-4 mx-5 gap-4">
                      <Progress
                        percent={90}
                        status="active"
                        showInfo={false}
                        strokeWidth={12}
                        strokeColor={theme === "light" ? "#450A0A" : " #84CC01"}
                        trailColor={theme === "light" ? "#DDDDDD" : "#D946EF"}
                      />{" "}
                      <p>9/10</p>
                    </div>
                  </div>
                  <div>
                    4.React TypeScript
                    <div className="flex flex-row mb-4 mx-5 gap-4">
                      <Progress
                        percent={80}
                        status="active"
                        showInfo={false}
                        strokeWidth={12}
                        strokeColor={theme === "light" ? "#450A0A" : " #84CC01"}
                        trailColor={theme === "light" ? "#DDDDDD" : "#D946EF"}
                      />{" "}
                      <p>8/10</p>
                    </div>
                  </div>
                  <div>
                    5.Github Page
                    <div className="flex flex-row mb-4 mx-5 gap-4">
                      <Progress
                        percent={90}
                        status="active"
                        showInfo={false}
                        strokeWidth={12}
                        strokeColor={theme === "light" ? "#450A0A" : " #84CC01"}
                        trailColor={theme === "light" ? "#DDDDDD" : "#D946EF"}
                      />{" "}
                      <p>9/10</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Evaluate;
