import img1 from './001.jpg';
import img2 from './002.jpg';
import img3 from './003.jpg';
import img4 from './004.jpg';
import img5 from './005.jpg';
import img6 from './006.jpg';
import img7 from './007.jpg';
import img8 from './008.jpg';
import img9 from './009.jpg';
import img10 from './010.jpg';
import './Category.css'
export const Category = () => {
    const images = [
        { image: img8, title: 'Top Offer' },
        { image: img1, title: 'Electronics' },
        { image: img2, title: 'Home & Kitchen' },
        { image: img3, title: 'Furniture' },
        { image: img4, title: 'Fashion' },
        { image: img5, title: 'Grocery' },
        { image: img6, title: 'Mobiles & Tablets' },
        { image: img7, title: 'Travel' },
        { image: img9, title: 'TVs & Appliances' },
        { image: img10, title: 'Beauty' },
    ];


    return (
        <div className="Category">
            <div className='categoryItems'>
                {
                    images.map((item, index) => {
                        return (
                            <div className='categoryItem' key={index}>
                                <img src={item.image} alt="" />
                                <span>{item.title}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
