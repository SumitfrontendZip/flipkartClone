import { Category } from "../Category/Category"
import { Navbar } from "../Navbar/Navbar"
 
import './Home.css'
export const Home = () => {
    return (
        <div className="homeSection">
            <Navbar />
            <Category/>
            
        </div>
    )
}
