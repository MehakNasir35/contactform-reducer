import './App.css';
import { NavBar } from './components/NavBar';
import { Main } from './components/Main';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <>
      <NavBar color='primary' dark={true} expand={true}/>
      <Main />
      </>
  );
}

export default App;
