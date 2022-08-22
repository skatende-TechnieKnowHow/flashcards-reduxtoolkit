import { createSlice } from "@reduxjs/toolkit";


export const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: {} // inner cards object will eventually hold all cards keyed by id.
  }, // end of initialState

  reducers: {
    addCard: (state, action) => {
      const addNewCard = {
        id: action.payload.id,
        front: action.payload.front,
        back: action.payload.back
      };
      state.cards[action.payload.id] = addNewCard;
    }
  }
});


// A selector that selects the cards object nested within initialState.

export const selectCards = (state) => state.cards.cards;

export const { addCard } = cardsSlice.actions;

export default cardsSlice.reducer;