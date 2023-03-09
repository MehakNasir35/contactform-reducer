import './App.css';

import { store } from "./store";
import { Provider } from "react-redux";

import { Home } from './views/Home';
import { Login } from './views/Login';
import { UserDetail } from './views/UserDetail';
import {composeWithDevTools} from 'redux-devtools-extension';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link,
  useParams,
  useNavigate,
  useSearchParams
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>

      </BrowserRouter>     
    </Provider>
  );
}

export default App;
