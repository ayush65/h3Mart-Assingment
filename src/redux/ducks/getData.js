/** @format */

export const GET_DATA = "GET_DATA";
const SET_DATA = "SET_DATA";
const INCREMENT_PAGE = "INCREMENT_PAGE";

const initialState = {
  data: [],
  count: 0,
};

export const getData = (action) => ({
  type: GET_DATA,
  payload: initialState.count + action,
});

export const setData = (data) => ({
  type: SET_DATA,
  data,
});

export const incrementPAGE = (action) => ({
  type: INCREMENT_PAGE,
  payload: initialState.count + action,
});

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      const { data } = action;
      return { ...state, data };

    case GET_DATA:
      //console.log(action);
      return { ...state };

    case INCREMENT_PAGE:
      console.log(action);
      return { ...state, count: state.count + 50 };

    default:
      return state;
  }
};

//** @format */
