import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { Home } from './pages/Home';
import { Auth } from './pages/Auth';
import Details from './pages/Details';
import { Navbar } from './components/Navbar';
import ListenerChat from './pages/ListenerChat';
import EDiary from './pages/EDiary';
import ExerciseHome from './pages/ExerciseHome';
import { Fragment } from 'react';
import './App.css'
import ExerciseDetail from './pages/ExerciseDetail';
function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/auth' element={<Auth />} />
          <Route path='/details' element={<Details />} />
          <Route
            element={
              <Fragment>
                <Navbar />
                <Outlet />
              </Fragment>
            }
          >
            <Route path='/' element={<Landing />} />
            <Route path='/home' element={<Home />} />
            <Route path='/ediary' element={<EDiary />} />
          </Route>
          <Route path='/chat' element={<ListenerChat />} />
          <Route path='/exercise' element={<ExerciseHome/>} />
          <Route path="/exercise/:id" element={<Fragment><Navbar/> <ExerciseDetail/></Fragment>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
