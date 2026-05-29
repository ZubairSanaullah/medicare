import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { Doctor } from './pages/Doctor'
import DoctorDetail from './pages/DoctorDetail'
import Service from './pages/Service'
import ServiceDetailPage from './pages/ServiceDetailPage'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Dhome from './pages/Dhome'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctor />} />
        <Route path='/doctors/:id' element={<DoctorDetail />} />
        <Route path='/services' element={<Service />} />
        <Route path='/services/:id' element={<ServiceDetailPage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/doctor-admin/login' element={<Login />} />
        <Route path='/doctor-admin/:id' element={<Dhome />} />
      </Routes>
    </div>
  )
}

export default App