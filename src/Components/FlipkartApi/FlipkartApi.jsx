import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { ProductCard } from "../ProductCard/ProductCard";
import './Filpkart.css';

const FilpkartApi = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.log('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="product-cards">
            {products.map((product) => (
                <Link key={product.id} to={`/${product.category}/${product.id}`}>
                    <ProductCard
                        id={product.id}
                        image={product.image}
                        title={product.title}
                        rating={product.rating.rate}
                        reviews={product.rating.count}
                        price={product.price}
                        category={product.category}
                    />
                </Link>
            ))}
        </div>
    );
};

export default FilpkartApi;
