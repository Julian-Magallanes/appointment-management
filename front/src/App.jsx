import './App.css'
import Home from './views/Home/Home'
import RegisterModal from './views/RegisterModal/RegisterModal'
import MyTurns from './views/MyTurns/MyTurns'
import PostTurn from './views/PostTurns/PostTurns'
import TermandCond from './views/TermandCond/TermandCond'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import { useSelector } from 'react-redux'
import LoginModal from './components/LoginModal/LoginModal'
function App() {
  const login = useSelector(state => state.login);
  return (
    <div className="AppContainer">

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Register' element={<RegisterModal/>}/>
        <Route path='/History' element={<MyTurns/>}/>
        <Route path='/Appointments' element={<PostTurn/>}/>
        <Route path='/Terms' element={<TermandCond/>}/>
        <Route path='/Login' element={<LoginModal/>}/>
      </Routes>
    
    {/*<TermandCond/>*/}
    </div>
    
  )
}

export default App
