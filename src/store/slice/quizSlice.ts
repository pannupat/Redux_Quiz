import { createSlice, PayloadAction } from '@reduxjs/toolkit';

//  interface ของ state  Quiz
interface QuizState {
  started: boolean; // บอกว่า Quiz เริ่มยัง
  currentQuestionIndex: number; // ตัว index คำถามปัจจุบัน
  selectedAnswer: string; // คำตอบที่เลอืก
  score: number; // คะแนนที่ได้
  recentScores: number[]; //คะแนนที่ถูกเก็บลาสุด
  quizCompleted: boolean; // บอกว่า Quiz เสร็จรึยัง
}

// ค่าเริ่มต้นของ state ของ Quiz
const initialState: QuizState = {
  started: false,
  currentQuestionIndex: 0,
  selectedAnswer: '',
  score: 0,
  recentScores: [],
  quizCompleted: false,
};

//  slice สำหรับ Quiz ใช้ createSlice จาก ReToolkit
const quizSlice = createSlice({
  name: 'quiz', 
  initialState, // state เริ่มต้น
  reducers: {
    startQuiz(state) { // เริ่ม Quiz
      state.started = true;
    },
    setCurrentQuestionIndex(state, action: PayloadAction<number>) { //กำหนด index ของคำถามปัจจุบัน
      state.currentQuestionIndex = action.payload;
    },
    setSelectedAnswer(state, action: PayloadAction<string>) { //กำหนดคำตอบที่ผู้เล่นเลือก
      state.selectedAnswer = action.payload;
    },
    increaseScore(state) { // เพิ่มคะแนน
      state.score += 1;
    },
    saveScore(state) { // บันทึกคะแนน
      state.recentScores = [state.score, ...state.recentScores]; // เอา score ไว้หน้า recentScores
      
      if (state.recentScores.length > 10) { // ถ้ามีรายการคะแนนมากกว่าหรือเท่ากับ 10 รายการ
        state.recentScores.pop(); // ลบคะแนนหลังสุดออก
      }
      
      state.score = 0; // เซ็ตคะแนน 0 
    },
    setQuizCompleted(state, action: PayloadAction<boolean>) { // Quiz เสร็จสิ้นแล้ว?
      state.quizCompleted = action.payload;
    },
  },
});

export const { startQuiz, setCurrentQuestionIndex, setSelectedAnswer, increaseScore, saveScore, setQuizCompleted } = quizSlice.actions;

export default quizSlice.reducer;  
