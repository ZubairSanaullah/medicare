import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { Doctor } from './pages/Doctor'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctor />} />
      </Routes>
    </div>
  )
}

export default App