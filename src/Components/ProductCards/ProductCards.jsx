
import { ProductCard } from "../ProductCard/ProductCard"
import CardData from "../ProductCard/ProductImages"
import './ProductCards.css'
export const ProductCards = () => {
    return (
        <>
            <div className="product-cards">
                {
                    CardData.map((card) => <ProductCard
                        key={card.id}
                        id={card.id}
                        image={card.img}
                        title={card.name}
                        rating={card.rating}
                        reviews={card.reviews}
                        price={card.price}
                        discountPrice={card.discountPrice}
                    
                    />)
                }
            </div>

        </>
    )
}
