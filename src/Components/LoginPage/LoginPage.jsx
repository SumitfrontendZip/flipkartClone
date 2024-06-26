import { Navbar } from "../Navbar/Navbar";
import './LoginPage.css';
import BellIcon from './notification-bell.png';
import TruckIcon from './cargo-truck.png';
import StarIcon from './star.png';
import { useState } from "react";
import OtpInput from "./OtpInput";
import { Link } from "react-router-dom";
function LoginPageContainer1() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [showOtp, setShowOtp] = useState(false);
    const [generatedOtp, setGeneratedOtp] = useState('');
    const [enteredOtp, setEnteredOtp] = useState('');

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

    function generateOtp() {
        return Math.floor(1000 + Math.random() * 9000);
    }

    const onHandleSubmit = async (event) => {
        event.preventDefault();

        if(phoneNumber || email){
            const otp = generateOtp();
            setGeneratedOtp(otp);
            alert(`Your OTP is ${otp}`);
            setShowOtp(true);
        }
    };

    const onOtpSubmit = (otp) => {
        setEnteredOtp(otp);
    };

    const handleVerifyOtp = () => {
        if (enteredOtp === generatedOtp.toString()) {
            alert("OTP verified");
        } else {
            alert("Invalid OTP");
        }
    };

    return (
        <div className="centerLogin">
            <header>
                <span>1</span>
                <span>LOGIN OR SIGNUP</span>
            </header>
            <section>
                <div className="subSection">
                    <input
                        type="text"
                        placeholder="Enter Email/Mobile Number"
                        onChange={onHandleInput}
                    />
                    <span>By Continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</span>
                    {showOtp && (phoneNumber || email) && <OtpInput phoneNumber={phoneNumber} onOtpSubmit={onOtpSubmit} />}
                    {!showOtp ? <button onClick={onHandleSubmit}>CONTINUE</button> : <Link to='/address'> <button onClick={handleVerifyOtp}>Submit OTP</button></Link>}
                </div>
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
    )
}

export default LoginPageContainer1
