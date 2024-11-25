import React from "react";
import Header from '../components/Header.jsx';
import nodadopic1 from '../assets/homee.jpg';
import nodadopic2 from '../assets/accred1.jpg';
import nodadopic3 from '../assets/accred2.jpg';
import '../design/Home.css';

function Home(){
    return(
        <> 
            <Header/>
            <div className="home-content">
                <div className="homepic">
                    <img src={nodadopic1} className="pic1"></img>
                </div>
                <div className="description">
                    <h2 className="descriptiontext">
    Nodado General Hospital: Your Partner in Health At Nodado General Hospital, we are dedicated to providing comprehensive, 
    compassionate healthcare to our community. Ensuring that you receive the highest standard of care.
    Our team of skilled professionals, including experienced physicians, nurses, and support staff, is committed to your well being. 
    We offer a wide range of services, from emergency care and surgeries to specialized treatments and wellness programs. Your health 
    is our priority. We believe in treating the whole person body, mind, and spirit while fostering a supportive environment for 
    patients and their families. Trust Nodado General Hospital to be your partner in health, guiding you every step of the way toward 
    a healthier future.
                    </h2>
                </div>
                <div className="accred-content">
                    <div className="accred">
                        <img src={nodadopic2} className="pic2"></img>
                    </div>
                    <div className="accred2">
                        <img src={nodadopic3} className="pic3"></img>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home