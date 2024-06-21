import Logo from './logo.png'
import customerIcon from './customer.png'
import wishListIcon from './bag.png'
import searchIcon from './search.png'
import './Navbar.css'
export const Navbar = () => {
    return (
        <nav>
            <div className="navbar">
                <img src={Logo} alt="" />
                <div className="SearchBar">
                    <img src={searchIcon} alt="" />
                    <input type="text" placeholder='Search for Products, Brands and More' />
                </div>
                <div className="profileSeaction">
                    <div className="section">
                        <img src={customerIcon} alt="" />
                        <span>Login</span>
                    </div>
                    <div className="section">
                        <img src={customerIcon} alt="" />
                        <span>Cart</span>
                    </div>
                    <div className="section">
                        <img src={wishListIcon} alt="" />
                        <span>Wishlist</span>
                    </div>

                </div>
            </div>
        </nav>
    )
}
