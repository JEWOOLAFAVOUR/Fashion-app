export const addBook = (book) => {
  return {
    type: "ADD_BOOK",
    book,
  };
};

export const removeBook = (book) => {
  return {
    type: "REMOVE_BOOK",
    book,
  };
};

export const addPuffPuff = (puff_puff) => {
  return {
    type: "ADD_PUFF_PUFF",
    puff_puff,
  };
};

export const removePuffPuff = (puff_puff) => {
  return {
    type: "REMOVE_PUFF_PUFF",
    puff_puff,
  };
};
