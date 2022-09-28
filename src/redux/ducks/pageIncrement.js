/** @format */

const INCREMENT = "INCREMENT";

const initialState = {
  count: 20,
};

export const pageIncrement = () => ({
  type: INCREMENT,
});

export const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 40 };
    default:
      return state;
  }
};
