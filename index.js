import React, { Component } from "react";
import { render } from "react-dom";
import App from "./App";
import "./style.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reducer from "./store/reducers/reducer";

/*
const logAction = store => {
  return next => {
    return action => {
      const result = next(action);
      console.log(`in middle ${JSON.stringify(result)}`);
      return result;
    };
  };
}; */

const store = createStore(reducer, applyMiddleware(ReduxThunk));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
