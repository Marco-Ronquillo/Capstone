import '../design/Services.css';
import lablogo from '../assets/laboratorylogobg.png';
import theralogo from '../assets/therapeuticlogobg.png';
import pharlogo from '../assets/pharmacylogobg.png';
import bloodlogo from '../assets/bloodtest.png';
import geneticslogo from '../assets/genetics.png';
import imaginglogo from '../assets/imaging.png';
import urinalysislogo from '../assets/urinalysis.png';
import otclogo from '../assets/otc.png'
import prescriptionlogo from '../assets/prescription.png'
import consultationlogo from '../assets/consultation.png'
import physicallogo from '../assets/physical.png'
import occupationallogo from '../assets/occupational.png'
import speechlogo from '../assets/speech.png'
import psychotherapylogo from '../assets/psychotherapy.png'
import React, { useState, useEffect } from 'react';
import Header from '../components/Header.jsx';

function Services() {
    const [activeCategory, setActiveCategory] = useState(null);
    const [subCategory, setSubCategory] = useState(null);
    const [cart, setCart] = useState([]); 
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [clickedItems, setClickedItems] = useState({});
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isOrderSummaryOpen, setIsOrderSummaryOpen] = useState(false);
    const [isDirectBookingSummaryOpen, setIsDirectBookingSummaryOpen] = useState(false);
    const [directBookingItem, setDirectBookingItem] = useState(null);
    const [orderDetails, setOrderDetails] = useState({
        name: '',
        number: '',
        email: '',
        appointmentDate: '',
    });

    const [isTrackOrderOpen, setIsTrackOrderOpen] = useState(false);
    const [orderId, setOrderId] = useState('');
    const [trackedOrderDetails, setTrackedOrderDetails] = useState(null);
    const [trackOrderError, setTrackOrderError] = useState('');

    useEffect(() => {
        if (orderId === '') {
            setTrackedOrderDetails(null);
            setTrackOrderError('');
        }
    }, [orderId]);

    const handleTrackOrder = async () => {
        try {
            const response = await fetch(`http://localhost:3001/api/orders/${orderId}`);
            if (!response.ok) {
                throw new Error('Order not found');
            }
            const data = await response.json();
            setTrackedOrderDetails(data);
            setTrackOrderError('');
        } catch (err) {
            setTrackOrderError(err.message);
            setTrackedOrderDetails(null);
        }
    };

    const handleBookNow = (item, category, subcategory = null) => {
        setDirectBookingItem({ name: item, category, subcategory });
        setIsFormOpen(true);
    };

    const handleInputChange = (e) => {
        setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
    };

    const handlePlaceOrder = () => {
        setDirectBookingItem(null); // Reset directBookingItem
        setIsFormOpen(true);
        setIsCartOpen(false); // Close the cart modal
    };

    const handleCloseForm = () => {
        setIsFormOpen(false);
        setDirectBookingItem(null); // Reset directBookingItem
    };

    const handleConfirmOrder = async () => {
        try {
            const orderData = {
                name: orderDetails.name,
                number: orderDetails.number,
                email: orderDetails.email,
                appointmentDate: orderDetails.appointmentDate,
                items: directBookingItem ? [directBookingItem] : cart, // Use directBookingItem if it exists
            };
    
            const response = await fetch('http://localhost:3001/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            });
    
            if (response.ok) {
                alert('Order placed successfully!');
                setOrderDetails({ name: '', number: '', email: '', appointmentDate: '' });
                setCart([]); // Clear the cart
                setDirectBookingItem(null); // Reset directBookingItem
                setIsOrderSummaryOpen(false); // Close Order Summary modal
                setIsDirectBookingSummaryOpen(false); // Close Order Details modal
            } else {
                const errorData = await response.json();
                alert(`Failed to place order: ${errorData.message || 'Unknown error'}`);
            }
        } catch (error) {
            console.error('Error placing order:', error);
            alert('An error occurred. Please try again.');
        }
    };

    const handleSubmitOrder = (e) => {
        e.preventDefault();
        setIsFormOpen(false);
    
        // If directBookingItem exists, it's a Book Now flow
        if (directBookingItem) {
            setIsDirectBookingSummaryOpen(true); // Show Order Details modal
        } else {
            setIsOrderSummaryOpen(true); // Show Order Summary modal
        }
    };
    
    const addToCart = (item, category, subcategory = null) => {
        setCart(prevCart => {
            if (category === "Medicine" || category === "Medicine - Prescription") {
                const existingItem = prevCart.find(cartItem => cartItem.name === item);
                if (existingItem) {
                    return prevCart.map(cartItem =>
                        cartItem.name === item ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
                    );
                } else {
                    return [...prevCart, { name: item, category, subcategory, quantity: 1 }];
                }
            } else {
                return prevCart.some(cartItem => cartItem.name === item)
                    ? prevCart
                    : [...prevCart, { name: item, category, subcategory }];
            }
        });
    
    const isMedicine = category === "Medicine" || category === "Medicine - Prescription";
    
        if (isMedicine) {
            setClickedItems(prev => ({ ...prev, [item]: "added" }));
    
            setTimeout(() => {
                setClickedItems(prev => ({
                    ...prev,
                    [item]: "default"
                }));
            }, 2000);
        } else {
            const isAlreadyInCart = cart.some(cartItem => cartItem.name === item);
    
            if (isAlreadyInCart) {
                setClickedItems(prev => ({ ...prev, [item]: "already" }));
    
                setTimeout(() => {
                    setClickedItems(prev => ({
                        ...prev,
                        [item]: "default"
                    }));
                }, 2000);
            } else {
                setClickedItems(prev => ({ ...prev, [item]: "added" }));
    
                setTimeout(() => {
                    setClickedItems(prev => {
                        const isStillInCart = cart.some(cartItem => cartItem.name === item);
                        return {
                            ...prev,
                            [item]: isStillInCart ? "already" : "default"
                        };
                    });
                }, 2000);
            }
        }
    };
    
    const removeFromCart = (itemToRemove) => {
        setCart(prevCart => prevCart.filter(item => item.name !== itemToRemove.name));
    
        setTimeout(() => {
            setClickedItems(prev => {
                const newState = { ...prev };
                delete newState[itemToRemove.name];
                return newState;
            });
        }, 500);
    };
    
    const increaseQuantity = (itemName) => {
        setCart(prevCart => prevCart.map(item =>
            (item.name === itemName && (item.category === "Medicine" || item.category === "Medicine - Prescription"))
                ? { ...item, quantity: item.quantity + 1 }
                : item
        ));
    };

    const decreaseQuantity = (itemName) => {
        setCart(prevCart => prevCart.map(item =>
            (item.name === itemName && (item.category === "Medicine" || item.category === "Medicine - Prescription"))
                ? { ...item, quantity: item.quantity - 1 }
                : item
        ).filter(item => item.quantity > 0 || item.name !== itemName));
    };

    const getQuantity = (itemName) => {
        const item = cart.find(cartItem => cartItem.name === itemName);
        return item ? item.quantity : 0;
    };

    const closeCart = () => {
            setIsCartOpen(false);
    };

    const handleBack = () => {
        if (subCategory) {
            setSubCategory(null);
        } else {
            setActiveCategory(null);
        }
    };

    const categoryOrder = ["Laboratory", "Therapy", "Medicine", "Medicine - Prescription"];

    const groupedCart = cart.reduce((acc, item) => {
        const key = item.subcategory ? `${item.category} - ${item.subcategory}` : item.category;
        if (!acc[key]) acc[key] = [];
        acc[key].push(item);
        return acc;
    }, {});

    const sortedCategories = Object.keys(groupedCart).sort((a, b) => {
        return categoryOrder.indexOf(a) - categoryOrder.indexOf(b);
    });

    const renderCards = () => {
        if (activeCategory === "laboratory") {
            return (
                <>
                    <div className="card">
                        <h3>Blood Tests</h3>
                        <img className="bloodtestlogo" src={bloodlogo} alt="photocard" />
                        <p>Comprehensive blood work analysis.</p>
                        <div className="order-button">
                            <button 
                                className="add-to-cart-button" 
                                onClick={() => addToCart("Blood Test", "Laboratory")}
                                style={{ backgroundColor: clickedItems["Blood Test"] === 'added' || clickedItems["Blood Test"] === 'already' ? 'rgb(185, 177, 177)' : '' }}
                            >
                                {clickedItems["Blood Test"] === 'added'
                                    ? "Added!"
                                    : clickedItems["Blood Test"] === 'already'
                                    ? "Already Added!"
                                    : "Add to Cart"}
                            </button>
                            <button className="book-button" onClick={() => handleBookNow("Blood Test", "Laboratory")}>
                                Book now
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <h3>Imaging Services</h3>
                        <img className="imaginglogo" src={imaginglogo} alt="photocard" />
                        <p>X-rays, MRIs, and CT scans.</p>
                        <div className="order-button">
                            <button 
                                className="add-to-cart-button" 
                                onClick={() => addToCart("Imaging Services", "Laboratory")}
                                style={{ backgroundColor: clickedItems["Imaging Services"] === 'added' || clickedItems["Imaging Services"] === 'already' ? 'rgb(185, 177, 177)' : '' }}
                            >
                                {clickedItems["Imaging Services"] === 'added' 
                                ? "Added!" 
                                : clickedItems["Imaging Services"] === 'already' 
                                ? "Already Added!" 
                                : "Add to Cart"}
                            </button>
                            <button className="book-button" onClick={() => handleBookNow("Imaging Services", "Laboratory")}>
                                Book now
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <h3>Genetic Testing</h3>
                        <img className="geneticslogo" src={geneticslogo} alt="photocard" />
                        <p>Accurate lab-based diagnostics.</p>
                        <div className="order-button">
                            <button 
                                className="add-to-cart-button" 
                                onClick={() => addToCart("Genetic Testing", "Laboratory")}
                                style={{ backgroundColor: clickedItems["Genetic Testing"] === 'added' || clickedItems["Genetic Testing"] === 'already' ? 'rgb(185, 177, 177)' : '' }}
                            >
                                {clickedItems["Genetic Testing"] === 'added' 
                                ? "Added!" : clickedItems["Genetic Testing"] === 'already' 
                                ? "Already Added!" 
                                : "Add to Cart"}
                            </button>
                            <button className="book-button" onClick={() => handleBookNow("Genetic Testing", "Laboratory")}>
                                Book now
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <h3>Urinalysis</h3>
                        <img className="urinalysislogo" src={urinalysislogo} alt="photocard" />
                        <p>Provides counseling and emotional support.</p>
                        <div className="order-button">
                            <button 
                                className="add-to-cart-button" 
                                onClick={() => addToCart("Urinalysis", "Laboratory")}
                                style={{ backgroundColor: clickedItems["Urinalysis"] === 'added' || clickedItems["Urinalysis"] === 'already' ? 'rgb(185, 177, 177)' : '' }}
                            >
                                {clickedItems["Urinalysis"] === 'added' 
                                ? "Added!" 
                                : clickedItems["Urinalysis"] === 'already' 
                                ? "Already Added!" 
                                : "Add to Cart"}
                            </button>
                            <button className="book-button" onClick={() => handleBookNow("Urinalysis", "Laboratory")}>
                                Book now
                            </button>
                        </div>
                    </div>
                </>
            );
        } 

        else if (activeCategory === "therapeutic") {
            return (
                <>
                    <div className="card">
                        <h3>Physical Therapy</h3>
                        <img className="physicallogo" src={physicallogo} alt="photocard" />
                        <p>Rehabilitation and movement recovery.</p>
                        <div className="order-button">
                            <button 
                                className="add-to-cart-button" 
                                onClick={() => addToCart("Physical Therapy", "Therapy")}
                                style={{ backgroundColor: clickedItems["Physical Therapy"] === 'added' || clickedItems["Physical Therapy"] === 'already' ? 'rgb(185, 177, 177)' : '' }}
                            >
                                {clickedItems["Physical Therapy"] === 'added' 
                                ? "Added!" 
                                : clickedItems["Physical Therapy"] === 'already' 
                                ? "Already Added!" 
                                : "Add to Cart"}
                            </button>
                            <button className="book-button" onClick={() => handleBookNow("Physical Therapy", "Therapy")}>
                                Book now
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <h3>Occupational Therapy</h3>
                        <img className="occupationallogo" src={occupationallogo} alt="photocard" />
                        <p>Improve daily life skills.</p>
                        <div className="order-button">
                            <button 
                                className="add-to-cart-button" 
                                onClick={() => addToCart("Occupational Therapy", "Therapy")}
                                style={{ backgroundColor: clickedItems["Occupational Therapy"] === 'added' || clickedItems["Occupational Therapy"] === 'already' ? 'rgb(185, 177, 177)' : '' }}
                            >
                                {clickedItems["Occupational Therapy"] === 'added' 
                                ? "Added!" 
                                : clickedItems["Occupational Therapy"] === 'already' 
                                ? "Already Added!" 
                                : "Add to Cart"}
                            </button>
                            <button className="book-button" onClick={() => handleBookNow("Occupational Therapy", "Therapy")}>
                                Book now
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <h3>Speech Therapy</h3>
                        <img className="speechlogo" src={speechlogo} alt="photocard" />
                        <p>Helping patients regain communication.</p>
                        <div className="order-button">
                            <button 
                                className="add-to-cart-button" 
                                onClick={() => addToCart("Speech Therapy", "Therapy")}
                                style={{ backgroundColor: clickedItems["Speech Therapy"] === 'added' || clickedItems["Speech Therapy"] === 'already' ? 'rgb(185, 177, 177)' : '' }}
                            >
                                {clickedItems["Speech Therapy"] === 'added' 
                                ? "Added!" 
                                : clickedItems["Speech Therapy"] === 'already' 
                                ? "Already Added!" 
                                : "Add to Cart"}
                            </button>
                            <button className="book-button" onClick={() => handleBookNow("Speech Therapy", "Therapy")}>
                                Book now
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <h3>Psychotherapy</h3>
                        <img className="psychotherapylogo" src={psychotherapylogo} alt="photocard" />
                        <p>Provides counseling and emotional support.</p>
                        <div className="order-button">
                            <button 
                                className="add-to-cart-button" 
                                onClick={() => addToCart("Psychotherapy", "Therapy")}
                                style={{ backgroundColor: clickedItems["Psychotherapy"] === 'added' || clickedItems["Psychotherapy"] === 'already' ? 'rgb(185, 177, 177)' : '' }}
                            >
                                {clickedItems["Psychotherapy"] === 'added' 
                                ? "Added!" 
                                : clickedItems["Psychotherapy"] === 'already' 
                                ? "Already Added!" 
                                : "Add to Cart"}
                            </button>
                            <button className="book-button" onClick={() => handleBookNow("Psychotherapy", "Therapy")}>
                                Book now
                            </button>
                        </div>
                    </div>
                </>
            );
        } 

        else if (activeCategory === "pharmacy") {
            if (subCategory === "prescription") {
                return (
                    <>
                        <div className="card">
                            <h3>Amoxicillin</h3>
                            <p>Antibiotic used to treat bacterial infections.</p>
                            <div className="order-button">
                                <button 
                                    className="add-to-cart-button" 
                                    onClick={() => addToCart("Amoxicillin", "Medicine", "Prescription")}
                                    style={{ backgroundColor: clickedItems["Amoxicillin"] === 'added' ? 'rgb(185, 177, 177)' : '' }}
                                >
                                    {clickedItems["Amoxicillin"] === 'added'
                                        ? "Added!"
                                        : `Add to Cart ${getQuantity("Amoxicillin") > 0 ? `(${getQuantity("Amoxicillin")})` : ""}`}
                                </button>
                                <button className="book-button" onClick={() => handleBookNow("Amoxicillin", "Medicine", "Prescription")}>
                                Buy now
                            </button>
                            </div>
                        </div>

                        <div className="card">
                            <h3>Metformin</h3>
                            <p>Used to control high blood sugar in diabetes.</p>
                            <div className="order-button">
                                <button 
                                    className="add-to-cart-button" 
                                    onClick={() => addToCart("Metformin", "Medicine", "Prescription")}
                                    style={{ backgroundColor: clickedItems["Metformin"] === 'added' ? 'rgb(185, 177, 177)' : '' }}
                                >
                                    {clickedItems["Metformin"] === 'added'
                                        ? "Added!"
                                        : `Add to Cart ${getQuantity("Metformin") > 0 ? `(${getQuantity("Metformin")})` : ""}`}
                                </button>
                                <button className="book-button" onClick={() => handleBookNow("Metformin", "Medicine", "Prescription")}>
                                Buy now
                            </button>
                            </div>
                        </div>

                        <div className="card">
                            <h3>Lisinopril</h3>
                            <p>Treats high blood pressure and heart conditions.</p>
                            <div className="order-button">
                                <button 
                                    className="add-to-cart-button" 
                                    onClick={() => addToCart("Lisinopril", "Medicine", "Prescription")}
                                    style={{ backgroundColor: clickedItems["Lisinopril"] === 'added' ? 'rgb(185, 177, 177)' : '' }}
                                >
                                    {clickedItems["Lisinopril"] === 'added'
                                        ? "Added!"
                                        : `Add to Cart ${getQuantity("Lisinopril") > 0 ? `(${getQuantity("Lisinopril")})` : ""}`}
                                </button>
                                <button className="book-button" onClick={() => handleBookNow("Lisinopril", "Medicine", "Prescription")}>
                                Buy now
                            </button>
                            </div>
                        </div>
                    </>
                );
            }

        else if (subCategory === "otc") {
            return (
                <>
                    <div className="card">
                        <h3>Paracetamol</h3>
                        <p>Relieves pain and reduces fever.</p>
                            <div className="order-button">
                                <button 
                                    className="add-to-cart-button" 
                                    onClick={() => addToCart("Paracetamol", "Medicine")}
                                    style={{ backgroundColor: clickedItems["Paracetamol"] === 'added' ? 'rgb(185, 177, 177)' : '' }}
                                >
                                    {clickedItems["Paracetamol"] === 'added'
                                        ? "Added!"
                                        : `Add to Cart ${getQuantity("Paracetamol") > 0 ? `(${getQuantity("Paracetamol")})` : ""}`}
                                </button>
                                <button className="book-button" onClick={() => handleBookNow("Paracetamol", "Medicine")}>
                                Buy now
                            </button>
                            </div>
                    </div>

                    <div className="card">
                        <h3>Ibuprofen</h3>
                        <p>Used for pain relief and inflammation.</p>
                            <div className="order-button">
                                <button 
                                    className="add-to-cart-button" 
                                    onClick={() => addToCart("Ibuprofen", "Medicine")}
                                    style={{ backgroundColor: clickedItems["Ibuprofen"] === 'added' ? 'rgb(185, 177, 177)' : '' }}
                                >
                                    {clickedItems["Ibuprofen"] === 'added'
                                        ? "Added!"
                                        : `Add to Cart ${getQuantity("Ibuprofen") > 0 ? `(${getQuantity("Ibuprofen")})` : ""}`}
                                </button>
                                <button className="book-button" onClick={() => handleBookNow("Ibuprofen", "Medicine")}>
                                Buy now
                            </button>
                            </div>
                    </div>

                    <div className="card">
                        <h3>Antacids</h3>
                        <p>Neutralizes stomach acid to relieve heartburn.</p>
                            <div className="order-button">
                                <button 
                                    className="add-to-cart-button" 
                                    onClick={() => addToCart("Antacids", "Medicine")}
                                    style={{ backgroundColor: clickedItems["Antacids"] === 'added' ? 'rgb(185, 177, 177)' : '' }}
                                >
                                    {clickedItems["Antacids"] === 'added'
                                        ? "Added!"
                                        : `Add to Cart ${getQuantity("Antacids") > 0 ? `(${getQuantity("Antacids")})` : ""}`}
                                </button>
                                <button className="book-button" onClick={() => handleBookNow("Antacids", "Medicine")}>
                                Buy now
                            </button>
                            </div>
                    </div>
                </>
            );
        } 

        else {
             return (
                <>
                    <div className="card" onClick={() => setSubCategory("otc")}>
                        <h3>Over-the-Counter Drugs</h3>
                        <img className="otclogo" src={otclogo} alt="photocard" />
                        <p>Find essential non-prescription medicines.</p>
                    </div>
                    <div className="card" onClick={() => setSubCategory("prescription")}>
                        <h3>Prescription Medications</h3>
                        <img className="prescriptionlogo" src={prescriptionlogo} alt="photocard" />
                        <p>We provide high-quality prescribed medicines.</p>
                    </div>
                    <div className="card">
                        <h3>Consultation Services</h3>
                        <img className="consultationlogo" src={consultationlogo} alt="photocard" />
                        <p>Get advice from our professional pharmacists.</p>
                    </div>
                </>
            );
        }
    }
  
    return (
            <>
                <div className="card" onClick={() => setActiveCategory("laboratory")}>
                    <img className="laboratorylogo" src={lablogo} alt="photocard" />
                    <h2 className="cardtext">Laboratory & Diagnostic Services</h2>
                </div>

                <div className="card" onClick={() => setActiveCategory("therapeutic")}>
                    <img className="card-image" src={theralogo} alt="photocard" />
                    <h2 className="cardtext">Therapeutic Services</h2>
                </div>

                <div className="card" onClick={() => { setActiveCategory("pharmacy"); setSubCategory(null); }}>
                    <img className="pharmacylogo" src={pharlogo} alt="photocard" />
                    <h2 className="cardtext">Pharmacy and Medication Services</h2>
                </div>
            </>
        );
    };
  
    return (
        <>
            <Header/>
            {activeCategory && (
                <button className="back-button" onClick={handleBack}>

                    <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    height={24}
                    width={24}
                    fill="#fff"
                    >
                    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                    </svg>
                </button>
            )}

{isFormOpen && (
    <>
        <div className="form-overlay" onClick={handleCloseForm}></div>
        <div className="form-modal">
            <button className="close-form" onClick={handleCloseForm}>X</button>
            <h2>Your Details</h2>

            <form onSubmit={handleSubmitOrder}>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" name="name" value={orderDetails.name} onChange={handleInputChange} required />
                </div>

                <div className="form-group">
                    <label>Phone Number:</label>
                    <input type="tel" name="number" value={orderDetails.number} onChange={handleInputChange} required />
                </div>

                <div className="form-group">
                    <label>Email Address:</label>
                    <input type="email" name="email" value={orderDetails.email} onChange={handleInputChange} required />
                </div>

                <div className="form-group">
                    <label>Appointment Date:</label>
                    <input type="date" name="appointmentDate" value={orderDetails.appointmentDate} onChange={handleInputChange} required />
                </div>

                <div className="modal-button-container">
                    <button type="submit" className="modal-confirm-order">Confirm Order</button>
                </div>
            </form>
        </div>
    </>
)}

{isOrderSummaryOpen && (
    <>
        <div className="form-overlay" onClick={() => setIsOrderSummaryOpen(false)}></div>
        <div className="order-summary-modal">
            <button className="close-summary" onClick={() => setIsOrderSummaryOpen(false)}>X</button>
            <h2>Order Summary</h2>
            <div className="order-details">
                <div className="info-group">
                    <p><strong>Name:</strong> {orderDetails.name}</p>
                    <p><strong>Appointment Date:</strong> {orderDetails.appointmentDate}</p>
                    <p><strong>Phone:</strong> {orderDetails.number}</p>
                    <p><strong>Email:</strong> {orderDetails.email}</p>
                </div>
            </div>
            <div className="order-items">
                <h3>Items in Cart</h3>
                <div className="cart-columns">
                    {sortedCategories.map((category) => (
                        <div key={category} className="cart-column">
                            <h4>{category}</h4>
                            <ul className="cart-items">
                                {groupedCart[category]
                                    .sort((a, b) => a.name.localeCompare(b.name))
                                    .map((item) => (
                                        <li key={item.name}>
                                            {item.name} {item.quantity > 1 && <span>({item.quantity})</span>}
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <button className="confirm-order-button" onClick={handleConfirmOrder}>
                Confirm Order
            </button>
        </div>
    </>
)}

{isDirectBookingSummaryOpen && (
    <>
        <div className="directbooking-form-overlay" onClick={() => setIsDirectBookingSummaryOpen(false)}></div>
        <div className="directbooking-summary-modal">
            <button className="directbooking-close-summary" onClick={() => setIsDirectBookingSummaryOpen(false)}>X</button>
            <h2 className="directbooking-header">Order Details</h2>
            <div className="directbooking-order-details">
                <div className="directbooking-info-group">
                    <p><strong>Name:</strong> {orderDetails.name}</p>
                    <p><strong>Appointment Date:</strong> {orderDetails.appointmentDate}</p>
                    <p><strong>Phone:</strong> {orderDetails.number}</p>
                    <p><strong>Email:</strong> {orderDetails.email}</p>
                </div>
            </div>
            <div className="directbooking-order-items">
                <h3 className="directbooking-header">Item</h3>
                <ul className="directbooking-cart-items">
                    <li>{directBookingItem.name}</li>
                </ul>
            </div>
            <button className="directbooking-confirm-order-button" onClick={handleConfirmOrder}>
                Confirm Order
            </button>
        </div>
    </>
)}
            <div className="services">{renderCards()}</div>
        </>
    );
  }
  export default Services;
