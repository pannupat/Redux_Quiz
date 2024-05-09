import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface QuizState {
  started: boolean;
  currentQuestionIndex: number;
  selectedAnswer: string;
  score: number;
  recentScores: number[];
  quizCompleted: boolean;
}

const initialState: QuizState = {
  started: false,
  currentQuestionIndex: 0,
  selectedAnswer: '',
  score: 0,
  recentScores: [],
  quizCompleted: false,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    startQuiz(state) {
      state.started = true;
    },
    setCurrentQuestionIndex(state, action: PayloadAction<number>) {
      state.currentQuestionIndex = action.payload;
    },
    setSelectedAnswer(state, action: PayloadAction<string>) {
      state.selectedAnswer = action.payload;
    },
    increaseScore(state) {
      state.score += 1;
    },
    saveScore(state) {
      // เพิ่มคะแนนใหม่ลงในตำแหน่งแรกของอาร์เรย์ recentScores
      state.recentScores = [state.score, ...state.recentScores];
    
      // ตรวจสอบว่า recentScores มีคะแนนเก่ามากกว่าหรือเท่ากับ 10 รายการ
      if (state.recentScores.length > 10) {
        // หากมีคะแนนเก่ามากกว่า 10 รายการ ให้ลบคะแนนตำแหน่งสุดท้ายออก
        state.recentScores.pop();
      }
    
      // เซ็ตคะแนนเป็น 0 สำหรับรอบถัดไป
      state.score = 0;
    },
    

    setQuizCompleted(state, action: PayloadAction<boolean>) {
      state.quizCompleted = action.payload;
    },
  },
});

export const { startQuiz, setCurrentQuestionIndex, setSelectedAnswer, increaseScore, saveScore, setQuizCompleted } = quizSlice.actions;

export default quizSlice.reducer;
