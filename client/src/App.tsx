import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from '../src/pages/Login';
import Signup from '../src/pages/Signup';
import TodoList from './pages/TodoList';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TodoList />}></Route>
        <Route path="/auth/login" element={<Login />}></Route>
        <Route path="/auth/signup" element={<Signup />}></Route>
      </Routes>
    </>
  );
}

export default App;
