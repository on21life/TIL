// react - redux setting

import React from "react";
import ReactDOM from "react-dom";

// 패키지 및 모듈
import { Provider } from "react-redux";
import { createStore } from "redux";

// 내가 작성한 코드들
import App from "./components/App";
import reducers from "./reducers";
// reducers 라는 폴더까지만 하면 그 안에 index.js를 의미하게 된다.

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
