import './App.css'
import Home from './Home'
import Navbar from './Navbar/Navbar'
import { useSaveState } from './Navbar/PostSlice'
import store from './Redux/Store';
import { Provider } from 'react-redux';

function App() {

  useSaveState();
  return (
    <Provider store={store}>

    <Navbar/>
    <Home/>

    </Provider>
  )
}

export default App