import { Navbar } from "../Navbar/Navbar";
import './LoginPage.css';
import BellIcon from './notification-bell.png';
import TruckIcon from './cargo-truck.png';
import StarIcon from './star.png';
import { useState } from "react";
import OtpInput from "./OtpInput";

function LoginPage() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [showOtp, setShowOtp] = useState(false);

    const onHandleInput = (event) => {
        const value = event.target.value;
        const phoneNumberRegex = /^\d{10}$/;
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

        if (phoneNumberRegex.test(value)) {
            setPhoneNumber(value);
            setEmail('');  
        } else if (emailRegex.test(value)) {
            setEmail(value);
            setPhoneNumber(''); 
        } else {
            setPhoneNumber('');
            setEmail('');
        }
    };

    const onHandleSubmit = (event) => {
        event.preventDefault();
        console.log("Email: ", email);
        console.log("Phone Number: ", phoneNumber);
        setShowOtp(true);
    };

    const onOtpSubmit =(otp)=>{
        console.log(otp);
    }

    return (
        <>
            <Navbar />
            <div className="containerLogin">
                <div className="centerLogin">
                    <header>
                        <span>1</span>
                        <span>LOGIN OR SIGNUP</span>
                    </header>
                    <section>
                        <form className="subSection" onSubmit={onHandleSubmit}>
                            <input
                                type="text"
                                placeholder="Enter Email/Mobile Number"
                                onChange={onHandleInput}
                                
                            />
                            <span>By Continuing, you agree to Filpkart's Terms of Use and Privacy Policy.</span>
                            {showOtp && phoneNumber && <OtpInput  phoneNumber={phoneNumber} onOtpSubmit={onOtpSubmit}/>}
                            <button type="submit">CONTINUE</button>
                        </form>
                        <div className="subSection">
                            <h4>Advantages of our secure login</h4>
                            <span>
                                <img src={TruckIcon} alt="Truck Icon" />
                                <span>Easily Track Orders, Hassle Free Returns</span>
                            </span>
                            <span>
                                <img src={BellIcon} alt="Bell Icon" />
                                <span>Get Relevant Alerts and Recommendations</span>
                            </span>
                            <span>
                                <img src={StarIcon} alt="Star Icon" />
                                <span>Wishlist, Reviews, Ratings, and more</span>
                            </span>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default LoginPage;
