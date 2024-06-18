import { Provider } from "react-redux";
import Navigators from "./Project/Navigators";
import store from "./redux/store";
import Nav from "./Project/Nav"
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <header className='App-header'>
          <Provider store={store}>
            <BrowserRouter>
              <Nav></Nav>
              <Navigators></Navigators>
            </BrowserRouter>
          </Provider>
        </header>
      </div>
    </>
  );
}
export default App;
