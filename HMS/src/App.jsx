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

function App() {
  return(
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="adminpage" element={<AdminPage/>}/>
            <Route path="/admin" element={<AdminLogin/>}/>
            <Route path="/patientpage" element={<PatientDashboard/>}/>
            <Route path="/doctorpage" element={<DoctorDashboard/>}/>
            <Route path="/doctorlogin" element={<DoctorLogin/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
