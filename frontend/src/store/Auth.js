import { createStore } from "redux";

const createReducer = (state = { counter: false, name: false }, action) => {
  if (action.type == "loginhos") {
    
    return {
      counter: true,
      name: true,
    };
  }
  if (action.type == "loginuser") {
    
    return {
      counter: true,
      name: false,
    };
  }
  if (action.type == "loginadmin") {

    return {
      counter: false,
      name: true,
    };
  }
  if (action.type == "logout") {
    localStorage.clear();
    return {
      counter: false,
      name: false,
    };
  }
  return state;
};
const store = createStore(createReducer);

export default store;
