import './App.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { Home } from './views/Home';
import { Login } from './views/Login';
import { UserDetail } from './views/UserDetail';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const queryClient = new QueryClient({});

function App() {
  return (
    <>
      <BrowserRouter>

        <QueryClientProvider client={queryClient}>

          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Login />} />
            <Route path="/user/:id" element={<UserDetail />} />
          </Routes>

          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>

      </BrowserRouter>

    </>
  );
}

export default App;
