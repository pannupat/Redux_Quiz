import {Route, Routes } from 'react-router-dom';
import Home from '../ReduxQuiz/Home';
import Quiz from '../ReduxQuiz/Quiz';
import Score from '../ReduxQuiz/Score';
import Evaluate from '../ReduxQuiz/Evaluate';


const Router = () => {
  return (
    <Routes>
        <Route index path="/" element={<Home/>} />
        <Route path="/quiz" element={<Quiz/>} />
        <Route path="/score" element={<Score/>} />
        <Route path="/evaluate" element={<Evaluate/>} />
    </Routes>
  );
}

export default Router;
