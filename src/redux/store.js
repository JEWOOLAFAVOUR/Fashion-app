// const redux = require("redux");

// const createStore = redux.createStore;
import { createStore } from "redux";

// initial state or store
const initialState = {
  books: 10,
  puff_puff: 9,
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return {
        ...state,
        books: state.books + action.book,
      };
    case "REMOVE_BOOK":
      return {
        ...state,
        books: state.books - action.book,
      };
    case "ADD_PUFF_PUFF":
      return {
        ...state,
        puff_puff: state.puff_puff + action.puff_puff,
      };
    case "REMOVE_PUFF_PUFF":
      return {
        ...state,
        puff_puff: state.puff_puff - action.puff_puff,
      };
    default:
      return state;
  }
};

const mercy_provision_store = createStore(reducer);

export default mercy_provision_store;

console.log("initial state", mercy_provision_store.getState());

mercy_provision_store.subscribe(() => {
  console.log("updated state", mercy_provision_store.getState());
});
