import { useEffect, useState } from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import './Filpkart.css'
const AmazonSellerProducts = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data);
                setProducts(data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="product-cards">
        {
            products.map((card) => <ProductCard
                key={card.id}
                id={card.id}
                image={card.image}
                title={card.title}
                rating={card.rating.rate}
                reviews={card.rating.count}
                price={card.price}
            />)
        }
    </div>
    );
};

export default AmazonSellerProducts;

