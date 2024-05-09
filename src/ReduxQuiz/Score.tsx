  // src/components/Score.tsx

  import { useSelector } from 'react-redux';
  import { RootState } from '../store/slice/index';
  import NavBar from './NavBar';

  const Score = () => {
    const recentScores = useSelector((state: RootState) => {
      const scores = state.quiz.recentScores.slice(0, 10); // Get the recent 10 scores
      // Check if the length of scores is less than 10
      if (scores.length <= 10) {
        return scores; // If less than 10, return the scores as is
      } else {
        // If equal to 10, remove the first score and add the new score to the end
        scores.shift(); // Remove the first score
        return scores; // Return the updated scores
      }
    });

    return (
      <div>
        <NavBar/>
        <h2>Recent Scores</h2>
        <ul>
          {recentScores.map((score, index) => (
            <li key={index}>{index + 1}. {score}</li> 
          ))}
        </ul>
      </div>
    );
  };

  export default Score;
