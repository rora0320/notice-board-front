import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import NoticeBoardPage from './pages/NoticeBoardPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path={'/board'} element={<NoticeBoardPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
