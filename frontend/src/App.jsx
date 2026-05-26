import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { Doctor } from './pages/Doctor'
import DoctorDetail from './pages/DoctorDetail'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctor />} />
        <Route path='/doctors/:id' element={<DoctorDetail />} />
      </Routes>
    </div>
  )
}

export default App