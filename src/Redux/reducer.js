const INTL_STATE = {
  currentCity: "",
  cities: ["kolhapur", "pune"],
};

export const reducer = (state = INTL_STATE, action) => {
  switch (action.type) {
    case "SETLOCATION":
      return { ...state, currentCity: action.payload };

    default:
      return state;
  }
};
