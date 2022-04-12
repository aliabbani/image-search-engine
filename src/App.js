import React from "react";
import { Provider } from "react-redux";
import ImageContainer from "./components/ImageContainer";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <ImageContainer />
      </div>
    </Provider>
  );
}

export default App;
