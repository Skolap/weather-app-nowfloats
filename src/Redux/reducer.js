const INTL_STATE = { ip: "", cities: ["kolhapur", "pune"] };

export const reducer = (state = INTL_STATE, action) => {
  switch (action.type) {
    case "SETIP":
      return { ...state, ip: action.payload };

    default:
      return state;
  }
};
