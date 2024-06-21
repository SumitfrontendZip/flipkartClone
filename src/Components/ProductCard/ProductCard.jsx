import { Link } from 'react-router-dom'
import './ProductCard.css'
import flipkartIcon from './prime11.png'
export const ProductCard = ({ image, title, rating, reviews, price, discountPrice , id }) => {
 
    const handleProductData = () => {
        const productData = {
            title,
            rating,
            reviews,
            price,
            discountPrice,
            id,
            image
        };
        localStorage.setItem('selectedProduct', JSON.stringify(productData));
    };

    return (
        <Link to={`/${title}`} onClick={() => handleProductData()}>
            <div className='productCard'>
                <img src={image} alt="" />
                <h2>{title}</h2>
                <div className="rating">
                    <span>{rating}</span>
                    <span>({reviews})</span>
                </div>
                <img src={flipkartIcon} alt="" className='flipkartIcon' />
                <div className="priceDetail">
                    <span className="price">₹{price}</span>
                    <span className="discount">₹{discountPrice}</span>
                    <span className="off">{Math.floor(((discountPrice - price) / discountPrice) * 100)}%</span>
                </div>
                <button className='BuyNow'>Buy Now</button>
            </div>
        </Link>
    )
}
