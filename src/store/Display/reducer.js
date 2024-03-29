import { combineReducers } from "@reduxjs/toolkit";
import { USER_NAME, RESET, VALUES, LOGIN } from "./constants";
const values = {
  user: "",
  displayuser: false,
  values: "",
  email: "admin@gmail.com",
  password: "admin1234",
  isLogged: false,
};
// Use the initialState as a default value
function AddUserReducer(state = values, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // Do something here based on the different types of actions
    case USER_NAME:
      const username = action.payload;
      return { ...state, user: username, displayuser: true };
    case RESET:
      const reset = action.payload;
      console.log("reste");
      return { ...state, displayuser: reset };
    case VALUES:
      const value = action.payload;
      alert("values reducer", value.name);
      console.log("values reducer", value);

      console.log("value", value);
      return { ...state, values: value };
    case LOGIN:
      const log = action.payload;
      console.log("log", log);
      return { ...state, isLogged: log };
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
}
const MyReducer = combineReducers({ AddUserReducer });
export default MyReducer;
