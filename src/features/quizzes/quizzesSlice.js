import { createSlice } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";
import { addQuizzesId} from "../topics/topicsSlice";

export const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {}
  }, // end of initialState

  // Add reducer here which has an addQuiz action
  reducers:{
    addQuiz: (state, action) => {
        
        const addNewQuiz = {
            id: action.payload.id,
            name: action.payload.name,
            topicId: action.payload.topicId,
            cardIds: action.payload.cardIds
            // cardIds: []
        }
        state.quizzes[action.payload.id] = addNewQuiz;
  }

  }

})

// an action creator that returns a thunk that dispatches these two actions one after the other. 
 export const thunkQuizzesAction = (payload) => {
  return (dispatch) => {
    dispatch(addQuiz(payload));
    dispatch(addQuizzesId({ topicId: payload.topicId, id: payload.id }));
  }
};

// A selector that selects the quizzes object nested within initialState.
export const selectQuizzes = (state) => state.quizzes.quizzes;

// Export the actions found in topicsSlice

export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;