import './App.css';

import { store } from "./store";
import { Provider } from "react-redux";

import { NavBar } from './components/NavBar';
import { Main } from './components/Main';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      
      <NavBar color='primary' dark={true} expand={true}/>
      <Main />

    </Provider>
  );
}

export default App;
