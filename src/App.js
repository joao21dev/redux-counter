import { Provider } from "react-redux";
import { createStore } from "redux";
import Counter from "./Counter";
import counterReducer from "./Reducer";

let store = createStore(counterReducer);

function App() {
  return (
    <Provider store={store}>
      <div>
      <Counter />
      </div>
    </Provider>
  );
}

export default App;
