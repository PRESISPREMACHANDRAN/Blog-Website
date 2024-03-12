
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Registration from './Components/Registration';
import CreatePost from './Components/CreatePost';
import ViewAllPost from './Components/ViewAllPost';
import ViewMyPost from './Components/ViewMyPost';
import NotFound from './Components/NotFound';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Login/>}/>
      <Route path='/registration' element={<Registration/>}/>
      <Route path='/createPost' element={<CreatePost/>}/>
      <Route path='/viewAllPost' element={<ViewAllPost/>}/>
      <Route path='/viewMyPost' element={<ViewMyPost/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
