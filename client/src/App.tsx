import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from '../src/pages/Login';
import Signup from '../src/pages/Signup';
import TodoPage from './pages/TodoPage';
import Header from 'components/Header';

function App() {

  return (
    <>
    <Header></Header>
      <Routes>
        <Route path="/" element={<TodoPage />}></Route>
        <Route path="/auth/login" element={<Login />}></Route>
        <Route path="/auth/signup" element={<Signup />}></Route>
      </Routes>
    </>
  );
}

export default App;
