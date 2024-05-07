
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Form from './Component/Form'
import Landing from './Component/landing'
import Completed from './Component/completed';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/form' element={< Form />} />
        <Route path='/completed' element={< Completed />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
