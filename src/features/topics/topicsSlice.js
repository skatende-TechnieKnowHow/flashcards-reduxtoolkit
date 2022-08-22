import { createSlice } from "@reduxjs/toolkit";


export const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {} //  inner topics object will eventually hold all topics keyed by id.
  }, // end of initialState

  // Add reducer here which has an addTopic action
  // Your addTopic action creator should modify the state.topics object
  reducers: {
    addTopic: (state, action) => {
      const addNewTopic = {
        id: action.payload.id,
        name: action.payload.name,
        icon: action.payload.icon,
        quizIds: [] // array containing the ids of each quiz associated with the topic
      };
      state.topics[action.payload.id] = addNewTopic;
    },
    // adding an action to the topics slice that adds a quiz’s id to the quizIds array
    addQuizzesId: (state, action) => {
      state.topics[action.payload.topicId].quizIds.push(action.payload.id);
    }
  }
});


// Export the selector as well as the action creators 
// and reducer that your slice generates.

// A selector that selects the topics object nested within initialState.
export const selectTopics = (state) => state.topics.topics;

// Export the actions found in topicsSlice

export const { addTopic, addQuizzesId } = topicsSlice.actions;
export default topicsSlice.reducer;