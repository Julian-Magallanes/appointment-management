import './App.css'
import Home from './views/Home/Home'
import RegisterModal from './views/RegisterModal/RegisterModal'
import MyTurns from './views/MyTurns/MyTurns'
import PostTurn from './views/PostTurns/PostTurns'
import TermandCond from './views/TermandCond/TermandCond'
import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import LoginModal from './views/LoginModal/LoginModal'
import PagesConstruction from './views/PagesConstruction/PagesConstruction'
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
        <Route path='/PagesConstruction' element={<PagesConstruction/>}/>
      </Routes>
    
    {/*<TermandCond/>*/}
    </div>
    
  )
}

export default App
