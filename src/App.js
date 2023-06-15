import './App.css';
import Login from './component/Login';
import { Routes, Route } from 'react-router-dom'
import Dashboard from './component/Dashboard';


function App() {
  return (
    <>
      {/* <Header/> */}
      <Routes>
        <Route path='/Dashboard' element={<Dashboard/>}></Route>
        <Route exact path='/' element={ <Login />}></Route>

      </Routes>
     
    </>
  );
}

export default App;
