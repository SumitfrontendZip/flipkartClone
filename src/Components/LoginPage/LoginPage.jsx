import { Navbar } from "../Navbar/Navbar"
import './LoginPage.css'
import BellIcon from './notification-bell.png'
import TruckIcon from './cargo-truck.png'
import StarIcon from './star.png'
function LoginPage() {
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
                        <div className="subSection">
                            <input type="text" placeholder="Enter Email/Mobile Number" />
                            <span>By Continuing, you agree to Filpkart's Terms of Use and Privacy Policy.</span>
                            <button>CONTINUE</button>
                        </div>
                        <div className="subSection">
                            <h4>Advantages of our secure login</h4>
                            <span>
                                <img src={TruckIcon} alt="" />
                                <span>Easily Track Orders, Hassle Free Returns</span>
                            </span>
                            <span>
                                <img src={BellIcon} alt="" />
                                <span>Get Relevant Alerts and Recommendation</span>
                            </span>
                            <span>
                                <img src={StarIcon} alt="" />
                                <span>Wishlist, Reviews , Rating and more</span>
                            </span>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default LoginPage
