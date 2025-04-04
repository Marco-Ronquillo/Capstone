import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from '../assets/LOGOOOOO.png';
import '../design/AdminPage.css';

function AdminPage () {
    const [isOpen, setIsOpen] = useState(false);    
    const [view, setView] = useState('home');
    const [patients, setPatients] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [medicines, setMedicines] = useState([]);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false); // For edit modal visibility
    const [currentPatient, setCurrentPatient] = useState(null); // For storing the selected patient's data
    const [isAddModalOpen, setIsAddModalOpen] = useState(false); 
    const [orders, setOrders] = useState([]);

    const [newPatient, setNewPatient] = useState({ // For form data
        username: "",
        age: "",
        gender: "",
        contact: "",
        guardian: "",
        address: "",
        email: "",
        password: ""
    });
    const [isAddDoctorModalOpen, setIsAddDoctorModalOpen] = useState(false);
    const [isEditDoctorModalOpen, setIsEditDoctorModalOpen] = useState(false);
    const [currentDoctor, setCurrentDoctor] = useState(null);
    const [newDoctor, setNewDoctor] = useState({
        name: "",
        specialization: "",
        corporateexp: "",
        number: "",
        address: "",
        email: "",
        password: ""
    });
    const [isAddMedicineModalOpen, setIsAddMedicineModalOpen] = useState(false); // For add medicine modal
    const [isEditMedicineModalOpen, setIsEditMedicineModalOpen] = useState(false); // For edit medicine modal
    const [currentMedicine, setCurrentMedicine] = useState(null); // For storing the selected medicine's data
    const [newMedicine, setNewMedicine] = useState({
        name: "",
        type: "",
        stock: "",
        available: ""
    });


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (view === 'orders') {
            axios.get("http://localhost:3001/api/orders")
                .then(response => {
                    setOrders(response.data);
                })
                .catch(err => console.error(err));
        }
    }, [view]);

    const handleAcceptOrder = (id) => {
        axios.put(`http://localhost:3001/api/orders/${id}/accept`)
            .then(response => {
                setOrders(orders.map(order => order._id === id ? response.data : order));
            })
            .catch(err => console.error(err));
    };
    
    const handleRejectOrder = (id) => {
        axios.put(`http://localhost:3001/api/orders/${id}/reject`)
            .then(response => {
                setOrders(orders.map(order => order._id === id ? response.data : order));
            })
            .catch(err => console.error(err));
    };

    useEffect(() => {
        if (view === 'patients') {
            axios.get("http://localhost:3001/patients")
                .then(response => {
                    setPatients(response.data);
                })
                .catch(err => console.error(err));
        }

        setIsAddModalOpen(false);
        setIsEditModalOpen(false);
    }, [view]);

    useEffect(() => {
        if (view === 'doctors') {
            axios.get("http://localhost:3001/doctors")
                .then(response => {
                    setDoctors(response.data); 
                })
                .catch(err => console.error(err));
        }

        setIsAddDoctorModalOpen(false);
        setIsEditDoctorModalOpen(false);
    }, [view]);

    useEffect(() => {
        if (view === 'pharmacy') {
            axios.get("http://localhost:3001/medicines") // Fetch medicines
                .then(response => {
                    setMedicines(response.data);
                })
                .catch(err => console.error(err));
        }

        setIsAddMedicineModalOpen(false);
        setIsEditMedicineModalOpen(false);
    }, [view]);

    const handleAddPatient = (e) => {
        e.preventDefault();
        fetch("http://localhost:3001/patients", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newPatient)
        })
            .then((res) => res.json())
            .then((data) => {
                setPatients([...patients, data]); // Update the patients list
                setIsAddModalOpen(false); // Close the modal
                setNewPatient({ username: "", age: "", gender: "", contact: "", guardian: "", address: "", email: "", password: "" }); // Reset form
            })
            .catch((err) => console.error(err));
    };

    const handleAddDoctor = (e) => {
        e.preventDefault();
        fetch("http://localhost:3001/doctors", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newDoctor)
        })
            .then((res) => res.json())
            .then((data) => {
                setDoctors([...doctors, data]); // Update the patients list
                setIsAddDoctorModalOpen(false); // Close the modal
                setNewDoctor({ name: "", specialization: "", corporateexp: "", number: "",  address: "", email: "", password: "" }); // Reset form
            })
            .catch((err) => console.error(err));
    };

    const handleAddMedicine = (e) => {
        e.preventDefault();
        fetch("http://localhost:3001/medicines", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newMedicine)
        })
            .then((res) => res.json())
            .then((data) => {
                setMedicines([...medicines, data]);
                setIsAddMedicineModalOpen(false);
                setNewMedicine({ name: "", type: "", stock: "", available: "" });
            })
            .catch((err) => console.error(err));
    };
    
    const handleEditPatient = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3001/patients/${currentPatient._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(currentPatient)
        })
            .then((res) => res.json())
            .then((updatedPatient) => {
                setPatients(patients.map((p) => (p._id === updatedPatient._id ? updatedPatient : p)));
                setIsEditModalOpen(false);
            })
            .catch((err) => console.error(err));
    };

    const handleEditDoctor = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3001/doctors/${currentDoctor._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(currentDoctor)
        })
            .then((res) => res.json())
            .then((updatedDoctor) => {
                setDoctors(doctors.map((p) => (p._id === updatedDoctor._id ? updatedDoctor : p)));
                setIsEditDoctorModalOpen(false);
            })
            .catch((err) => console.error(err));
    };

    const handleEditMedicine = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3001/medicines/${currentMedicine._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(currentMedicine)
        })
            .then((res) => res.json())
            .then((updatedMedicine) => {
                setMedicines(medicines.map((p) => (p._id === updatedMedicine._id ? updatedMedicine : p)));
                setIsEditMedicineModalOpen(false);
            })
            .catch((err) => console.error(err));
    };

    const handleDeletePatient = (id) => {
        fetch(`http://localhost:3001/patients/${id}`, {
            method: "DELETE",
        })
        .then((response) => {
            if (response.ok) {
                setPatients(patients.filter((p) => p._id !== id));
            } else {
                console.error("Failed to delete the patient.");
            }
        })
        .catch((err) => console.error(err));
    };

    const handleDeleteDoctor = (id) => {
        fetch(`http://localhost:3001/doctors/${id}`, {
            method: "DELETE",
        })
        .then((response) => {
            if (response.ok) {
                setDoctors(doctors.filter((p) => p._id !== id));
            } else {
                console.error("Failed to delete the doctor.");
            }
        })
        .catch((err) => console.error(err));
    };

    const handleDeleteMedicine = (id) => {
        fetch(`http://localhost:3001/medicines/${id}`, {
            method: "DELETE",
        })
        .then((response) => {
            if (response.ok) {
                setMedicines(medicines.filter((p) => p._id !== id));
            } else {
                console.error("Failed to delete the medicine.");
            }
        })
        .catch((err) => console.error(err));
    };

    return (
        <div className="adashboard-container">
            {/* Navigation Bar (Header) */}
            <header className={`aheader ${isOpen ? 'open' : ''}`}>            
                <nav className="anavbar">
                    <div className="aburger" onClick={toggleMenu}>
                        ☰
                    </div>
                </nav>
                <nav className="alogout">
                    <ul className="alogout-list">
                        <li className="alogout-item"><a href="/home">Logout</a></li>
                    </ul>
                </nav>
            </header>

            {/* Sidebar */}
            {isOpen && (
                <div className={`asidebar ${isOpen ? 'open' : 'closed'}`}>
                    <div className="aimgcontainer">
                        <h1>
                            <img src={logo} alt="Logo" />
                        </h1>
                    </div>
                    <div className="asidenav-links">
                        <ul>
                            <li><button onClick={() => setView('home')}><b>Home</b></button></li>
                            <li><button onClick={() => setView('profile')}>Profile</button></li>
                            <li><button onClick={() => setView('pharmacy')}>Pharmacy</button></li>
                            <li><button onClick={() => setView('doctors')}>Doctors</button></li>
                            <li><button onClick={() => setView('patients')}>Patients</button></li>
                            <li><button onClick={() => setView('orders')}>Orders</button></li>
                        </ul>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className={`acontent ${isOpen ? 'shifted' : ''}`}>
                {view === 'home' && 
                    <div>
                        Hello, Admin!
                    </div>
                }
                {view === 'profile' && 
                    <div>
                        <>
                        <div className="aprofile-container">
                            <div className="aprofile-card">
                                <img
                                    className="aprofile-avatar"
                                    src="https://via.placeholder.com/150"
                                    alt="Patient Avatar"
                                />
                                <div className="aprofile-details">
                                    <h2>Admin</h2>
                                    <p><strong>Name:</strong> John Andrie</p>
                                    <p><strong>Gender:</strong> Male</p>
                                    <p><strong>Contact:</strong> 09993458721</p>
                                    <p><strong>Email:</strong> admin.core2@gmail.com</p>
                                    <p><strong>Address:</strong> Nodado General Hospital, Camarin, Caloocan</p>
                                    <p><strong>Position:</strong> Administrator</p>
                                </div>
                            </div>
                        </div>
                        </>
                    </div>
                }
                {view === 'pharmacy' && (
    <div className="aphartable">
        <h2>Pharmacy Medicines Management</h2>
        <div className="amedicine-table-container">

            {/* Medicines Table */}
            <table className="amedicine-table">
                <thead>
                    <tr>
                        <th>Medicine Name</th>
                        <th>Type</th>
                        <th>Stock</th>
                        <th>Availability</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {medicines.map((medicine, index) => (
                        <tr key={index}>
                            <td>{medicine.name}</td>
                            <td>{medicine.type}</td>
                            <td>{medicine.stock}</td>
                            <td>{medicine.available}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
)}

{/* Add Medicine Modal */}
{isAddMedicineModalOpen && (
    <div className="modal-overlay">
        <div className="modal-content">
            <h2>Add New Medicine</h2>
            <form onSubmit={handleAddMedicine}>
                <input
                    type="text"
                    placeholder="Medicine Name"
                    value={newMedicine.name}
                    onChange={(e) => setNewMedicine({ ...newMedicine, name: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Type"
                    value={newMedicine.type}
                    onChange={(e) => setNewMedicine({ ...newMedicine, type: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Stock"
                    value={newMedicine.stock}
                    onChange={(e) => setNewMedicine({ ...newMedicine, stock: e.target.value })}
                />
                <select
                    value={newMedicine.available}
                    onChange={(e) => setNewMedicine({ ...newMedicine, available: e.target.value })}
                >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
                <div className="modal-buttons">
                    <button type="submit">Add Medicine</button>
                    <button type="button" onClick={() => setIsAddMedicineModalOpen(false)}>Cancel</button>
                </div>
            </form>
        </div>
    </div>
)}

{/* Edit Medicine Modal */}
{isEditMedicineModalOpen && currentMedicine && (
    <div className="modal-overlay">
        <div className="modal-content">
            <h2>Edit Medicine</h2>
            <form onSubmit={handleEditMedicine}>
                <input
                    type="text"
                    value={currentMedicine.name}
                    onChange={(e) => setCurrentMedicine({ ...currentMedicine, name: e.target.value })}
                />
                <input
                    type="text"
                    value={currentMedicine.type}
                    onChange={(e) => setCurrentMedicine({ ...currentMedicine, type: e.target.value })}
                />
                <input
                    type="number"
                    value={currentMedicine.stock}
                    onChange={(e) => setCurrentMedicine({ ...currentMedicine, stock: e.target.value })}
                />
                <input
                    type="text"
                    value={currentMedicine.available}
                    onChange={(e) => setCurrentMedicine({ ...currentMedicine, available: e.target.value })}
                >
                </input>
                <div className="modal-buttons">
                    <button type="submit">Save Changes</button>
                    <button type="button" onClick={() => setIsEditMedicineModalOpen(false)}>Cancel</button>
                </div>
            </form>
        </div>
    </div>
)}

                {view === 'doctors' && (
                    <div className="adoctortable">
                        <h2>Doctors Management</h2>
                        <div className="adoctor-table-container">

                            {/* Doctors Table */}
                            <table className="adoctor-table">
                                <thead>
                                    <tr>
                                        <th>Doctor Name</th>
                                        <th>Specialization</th>
                                        <th>Corporate Experience</th>
                                        <th>Contact Number</th>
                                        <th>Address</th>
                                        <th>Email</th>
                                        <th>Password</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {doctors.map(doctor => (
                                        <tr key={doctor._id}>
                                            <td>{doctor.name}</td>
                                            <td>{doctor.specialization}</td>
                                            <td>{doctor.corporateexp}</td>
                                            <td>{doctor.number}</td>
                                            <td>{doctor.address}</td>
                                            <td>{doctor.email}</td>
                                            <td>{doctor.password}</td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* Add Doctor Modal */}
                {isAddDoctorModalOpen && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <h2>Add New Doctor</h2>
                            <form onSubmit={handleAddDoctor}>
                                <input
                                    type="text"
                                    placeholder="Doctor Name"
                                    value={newDoctor.name}
                                    onChange={(e) => setNewDoctor({ ...newDoctor, name: e.target.value })}
                                />
                                <input
                                    type="text"
                                    placeholder="Specialization"
                                    value={newDoctor.specialization}
                                    onChange={(e) => setNewDoctor({ ...newDoctor, specialization: e.target.value })}
                                />
                                <input
                                    type="text"
                                    placeholder="Corporate Experience"
                                    value={newDoctor.corporateexp}
                                    onChange={(e) => setNewDoctor({ ...newDoctor, corporateexp: e.target.value })}
                                />
                                <input
                                    type="text"
                                    placeholder="Contact Number"
                                    value={newDoctor.number}
                                    onChange={(e) => setNewDoctor({ ...newDoctor, number: e.target.value })}
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={newDoctor.email}
                                    onChange={(e) => setNewDoctor({ ...newDoctor, email: e.target.value })}
                                />
                                <input
                                    type="text"
                                    placeholder="Address"
                                    value={newDoctor.address}
                                    onChange={(e) => setNewDoctor({ ...newDoctor, address: e.target.value })}
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={newDoctor.password}
                                    onChange={(e) => setNewDoctor({ ...newDoctor, password: e.target.value })}
                                />
                                <div className="modal-buttons">
                                    <button type="submit">Add Doctor</button>
                                    <button type="button" onClick={() => setIsAddDoctorModalOpen(false)}>Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/* Edit Doctor Modal */}
                {isEditDoctorModalOpen && currentDoctor && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <h2>Edit Doctor</h2>
                            <form onSubmit={handleEditDoctor}>
                                <input
                                    type="text"
                                    value={currentDoctor.name}
                                    onChange={(e) => setCurrentDoctor({ ...currentDoctor, name: e.target.value })}
                                />
                                <input
                                    type="text"
                                    value={currentDoctor.specialization}
                                    onChange={(e) => setCurrentDoctor({ ...currentDoctor, specialization: e.target.value })}
                                />
                                <input
                                    type="text"
                                    value={currentDoctor.corporateexp}
                                    onChange={(e) => setCurrentDoctor({ ...currentDoctor, corporateexp: e.target.value })}
                                />
                                <input
                                    type="text"
                                    value={currentDoctor.number}
                                    onChange={(e) => setCurrentDoctor({ ...currentDoctor, number: e.target.value })}
                                />
                                <input
                                    type="email"
                                    value={currentDoctor.email}
                                    onChange={(e) => setCurrentDoctor({ ...currentDoctor, email: e.target.value })}
                                />
                                <input
                                    type="text"
                                    value={currentDoctor.address}
                                    onChange={(e) => setCurrentDoctor({ ...currentDoctor, address: e.target.value })}
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={currentDoctor.password}
                                    onChange={(e) => setCurrentDoctor({ ...currentDoctor, password: e.target.value })}
                                />
                                <div className="modal-buttons">
                                    <button type="submit">Save Changes</button>
                                    <button type="button" onClick={() => setIsEditDoctorModalOpen(false)}>Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
                {view === 'patients' && (
                    <div className="apatienttable">
                        <h2>Patients Management</h2>
                        <div className="apatient-table-container">
                            <table className="apatient-table">
                                <thead>
                                    <tr>
                                        <th>Patient Name</th>
                                        <th>Age</th>
                                        <th>Gender</th>
                                        <th>Number</th>
                                        <th>Guardian No.</th>
                                        <th>Address</th>
                                        <th>Email</th>
                                        <th>Password</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {patients.map(patient => (
                                        <tr key={patient._id}>
                                            <td>{patient.username}</td>
                                            <td>{patient.age}</td>
                                            <td>{patient.gender}</td>
                                            <td>{patient.contact}</td>
                                            <td>{patient.guardian}</td>
                                            <td>{patient.address}</td>
                                            <td>{patient.email}</td>
                                            <td>{patient.password}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
                {isAddModalOpen && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <h2>Add New Patient</h2>
                            <form onSubmit={handleAddPatient}>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={newPatient.username}
                                    onChange={(e) => setNewPatient({ ...newPatient, username: e.target.value })}
                                />
                                <input
                                    type="number"
                                    placeholder="Age"
                                    value={newPatient.age}
                                    onChange={(e) => setNewPatient({ ...newPatient, age: e.target.value })}
                                />
                                <input
                                    type="text"
                                    placeholder="Gender"
                                    value={newPatient.gender}
                                    onChange={(e) => setNewPatient({ ...newPatient, gender: e.target.value })}
                                />
                                <input
                                    type="text"
                                    placeholder="Contact"
                                    value={newPatient.contact}
                                    onChange={(e) => setNewPatient({ ...newPatient, contact: e.target.value })}
                                />
                                <input
                                    type="text"
                                    placeholder="Guardian"
                                    value={newPatient.guardian}
                                    onChange={(e) => setNewPatient({ ...newPatient, guardian: e.target.value })}
                                />
                                <input
                                    type="text"
                                    placeholder="Address"
                                    value={newPatient.address}
                                    onChange={(e) => setNewPatient({ ...newPatient, address: e.target.value })}
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={newPatient.email}
                                    onChange={(e) => setNewPatient({ ...newPatient, email: e.target.value })}
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={newPatient.password}
                                    onChange={(e) => setNewPatient({ ...newPatient, password: e.target.value })}
                                />
                                <div className="modal-buttons">
                                    <button type="submit">Add Patient</button>
                                    <button type="button" onClick={() => setIsAddModalOpen(false)}>Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {isEditModalOpen && currentPatient && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <h2>Edit Patient</h2>
                            <form onSubmit={handleEditPatient}>
                                <input type="text" value={currentPatient.username} onChange={(e) => setCurrentPatient({ ...currentPatient, username: e.target.value })} />
                                <input type="text" value={currentPatient.age} onChange={(e) => setCurrentPatient({ ...currentPatient, age: e.target.value })} />
                                <input type="text" value={currentPatient.gender} onChange={(e) => setCurrentPatient({ ...currentPatient, gender: e.target.value })} />
                                <input type="text" value={currentPatient.contact} onChange={(e) => setCurrentPatient({ ...currentPatient, contact: e.target.value })} />
                                <input type="text" value={currentPatient.guardian} onChange={(e) => setCurrentPatient({ ...currentPatient, guardian: e.target.value })} />
                                <input type="text" value={currentPatient.address} onChange={(e) => setCurrentPatient({ ...currentPatient, address: e.target.value })} />
                                <input type="email" value={currentPatient.email} onChange={(e) => setCurrentPatient({ ...currentPatient, email: e.target.value })} />
                                <input type="password" value={currentPatient.password} onChange={(e) => setCurrentPatient({ ...currentPatient, password: e.target.value })} />
                            <div className="modal-buttons">
                                <button type="submit">Save Changes</button>
                                <button type="button" onClick={() => setIsEditModalOpen(false)}>Cancel</button>
                            </div>
                            </form>
                        </div>
                    </div>
                )}

{view === 'orders' && (
    <div className="aordertable">
        <h2>Orders Management</h2>
        <div className="aorder-table-container">
            <table className="aorder-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Number</th>
                        <th>Email</th>
                        <th>Appointment Date</th>
                        <th>Items</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order._id}>
                            <td>{order.name}</td>
                            <td>{order.number}</td>
                            <td>{order.email}</td>
                            <td>{order.appointmentDate}</td>
                            <td>
                                <ul>
                                    {order.items.map((item, index) => (
                                        <li key={index}>
                                            {item.name} - {item.category} - {item.quantity}
                                        </li>
                                    ))}
                                </ul>
                            </td>
                            <td>
                                <button className="aaccept-btn" onClick={() => handleAcceptOrder(order._id)}>
                                    Accept
                                </button>
                                <button className="areject-btn" onClick={() => handleRejectOrder(order._id)}>
                                    Reject
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
)}

            </div>
        </div>
    );
}

export default AdminPage