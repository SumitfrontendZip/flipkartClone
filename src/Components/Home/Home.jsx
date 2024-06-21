import { Category } from "../Category/Category"
import { Navbar } from "../Navbar/Navbar"
import { ProductCards } from "../ProductCards/ProductCards"
import { ProductSlider } from "../ProductSlider/ProductSlider"
import './Home.css'
export const Home = () => {
    return (
        <div className="homeSection">
            <Navbar />
            <Category/>
            <ProductSlider/>
            <ProductCards/>
        </div>
    )
}
