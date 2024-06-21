import { useParams } from 'react-router-dom';
import discountIcon from './discount.png';
import { useEffect, useState } from 'react';
import { Navbar } from '../Navbar/Navbar';
import Zoom from 'react-img-zoom'
import './ProductDescription.css'
const ProductDescription = () => {
    const productId = 1;
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
                console.log(response);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProduct(data);
                console.log(data);
            } catch (error) {
                console.log('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [productId]);

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Navbar />
            <div className='productDescription'>
                <Zoom
                    img={product.image}
                    zoomScale={3}
                    width={600}
                    height={600}
                    style={{ mixBlendMode: 'multiply' }}
                />
                <section>
                    <h2>{product.title}</h2>
                    <div className="rating">
                        <span>Rating: {product.rating.rate} ({product.rating.count} reviews)</span>
                    </div>
                    <span className="price">Price: ₹{product.price}</span>
                    <h2>Available Offers</h2>
                    <div className="offers">
                        <span><img src={discountIcon} alt="" /><strong>Bank Offer</strong>: Get ₹50 instant discount on first Flipkart UPI transaction on order of ₹200 and above</span>
                        <span><img src={discountIcon} alt="" /><strong>Bank Offer</strong>: 5% Cashback on Flipkart Axis Bank Card</span>
                        <span><img src={discountIcon} alt="" /><strong>Bank Offer</strong>: 10% off on ICICI Bank Credit Card Transactions, up to ₹1000 on orders of ₹5,000 and above</span>
                        <span><img src={discountIcon} alt="" /><strong>Partner Offer</strong>: Sign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹20,000</span>
                    </div>
                    <div className="deliveryInput">
                        <span>Delivery</span>
                        <input type="number" placeholder="Enter Pincode" />
                    </div>
                    <div className='Color'>
                        <span>Color</span>
                        <span>Red</span><span>Blue</span><span>Green</span><span>Black</span>
                    </div>
                    <span className="description">Description: {product.description}</span>
                </section>
            </div>
        </>
    );
};

export default ProductDescription;
