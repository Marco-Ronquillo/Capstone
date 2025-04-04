import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Services from './pages/Services';
import AdminLogin from './pages/AdminLogin';
import AdminPage from './pages/AdminPage';
import PatientDashboard from './pages/PatientDashboard';
import DoctorLogin from './pages/DoctorLogin';
import DoctorDashboard from './pages/DoctorDashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import LandingPage from './pages/LandingPage';
import Pharmacy from './pages/Pharmacy';
import Service from './pages/Service';

function App() {
  return(
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<LandingPage/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="adminpage" element={<AdminPage/>}/>
            <Route path="/admin" element={<AdminLogin/>}/>
            <Route path="/patientpage" element={<PatientDashboard/>}/>
            <Route path="/doctorpage" element={<DoctorDashboard/>}/>
            <Route path="/doctorlogin" element={<DoctorLogin/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/landingpage" element={<LandingPage/>}/>
            <Route path="/pharmacy" element={<Pharmacy/>}/>
            <Route path="/service" element={<Service/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
