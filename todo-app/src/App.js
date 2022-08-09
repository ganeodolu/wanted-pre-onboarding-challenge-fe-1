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
				<Route path="/auth" element={<Login />}></Route>
				<Route path="/signup" element={<Signup />}></Route>
			</Routes>
		</>
	);
}

export default App;
