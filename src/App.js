import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import Counter from "./Counter";
import counterReducer from "./reducer";
import logger from "redux-logger";
import { Component } from "react";
import DisplayCounter from "./DisplayCounter";

let store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Counter />
          <DisplayCounter />
        </div>
      </Provider>
    );
  }
}

export default App;
