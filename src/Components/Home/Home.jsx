import { Category } from "../Category/Category"
import AmazonSellerProducts from "../FlipkartApi/FlipkartApi"
import { Navbar } from "../Navbar/Navbar"
 import { ProductSlider } from "../ProductSlider/ProductSlider"
import './Home.css'
export const Home = () => {
    return (
        <div className="homeSection">
            <Navbar />
            <Category/>
            <ProductSlider/>
            <AmazonSellerProducts/>
        </div>
    )
}
