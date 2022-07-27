import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Header } from './components/Header';
import { Characters } from './Pages/Characters';

function App() {
  
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/characters/:name" element={<Characters />}></Route>
      </Routes>
    </div>
  )
}

export default App
