const INTL_STATE = {
  bookmarks: [],
};

export const reducer = (state = INTL_STATE, action) => {
  switch (action.type) {
    case "BOOKMARKS":
      if (!state.bookmarks.includes(action.payload)) {
        return { ...state, bookmarks: [...state.bookmarks, action.payload] };
      }
    default:
      return state;
  }
};
