import { combineReducers } from '@reduxjs/toolkit';
import quizReducer from './quizSlice';

const rootReducer = combineReducers({
  quiz: quizReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
