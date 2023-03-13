import './App.css';
import { NavBar } from './components/NavBar';
import { Main } from './components/Main';
import { QueryClient, QueryClientProvider } from  '@tanstack/react-query';
import 'bootstrap/dist/css/bootstrap.min.css';
const queryClient = new QueryClient({});
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NavBar color='primary' dark={true} expand={true} />
        <Main />
      </QueryClientProvider>
    </>
  );
}

export default App;
