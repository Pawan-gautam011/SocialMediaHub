import './App.css'
import Home from './Home'
import Navbar from './Navbar/Navbar'
import { useSaveState } from './Navbar/PostSlice'

function App() {

  useSaveState();
  return (
    <>
    <Navbar/>
    <Home/>

    </>
  )
}

export default App