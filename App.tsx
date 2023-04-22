import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./src/routes/MainTabs";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducers from "./src/reducers/rootReducers";
import { createStore, applyMiddleware } from "redux";

const store = createStore(rootReducers, applyMiddleware(thunk))

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </Provider>
  );
}