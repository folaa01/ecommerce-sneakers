import { useState } from "react";
import { data } from "../../data";
import { ReactComponent as CartIcon } from '../../assets/icons/icon-cart.svg';
import minus from '../../assets/icons/icon-minus.svg';
import plus from '../../assets/icons/icon-plus.svg';
import './home.scss'

const Home = () => {
    const [products] = useState(data);
    const [value, setValue] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const {mainImage} = products[value];

    return (
        <div>
            <section className="home-body">
                <article>
                    <div><img src={mainImage} alt="" className="main-image" /></div>
                    <div className="thumbnails">
                    {products.map((item, index) => (
                                <ul>
                                    <li  key={item.id} onClick={() => setValue(index)}><img src={item.thumbnail} alt="" className={`thumbnail-images ${index === value && "clicked-image"}`} /></li>
                                </ul>
                            ))}
                    </div>
                </article>
                <article className="right-article">
                    <h2 className="company-type">Sneaker Company</h2>
                    <h1 className="company-title">Fall Limited Edition Sneakers</h1>
                    <p className="product-description">These low-profile sneakers are your perfect casual wear companion. Featuring a 
                        durable rubber outer sole, they’ll withstand everything the weather can offer.
                    </p>
                    <div className="price-container">
                        <ul className="main-price">
                            <li className="price">$125.00</li>
                            <li className="discount">50%</li>
                        </ul>
                        <p className="initial-price"><s>$250.00</s></p>
                    </div>
                    <div className="bottom-container">
                        <ul className="quantity-container">
                            <li><img src={minus} alt="" /></li>
                            <li>{quantity}</li>
                            <li><img src={plus} alt="" /></li>
                        </ul>
                        <button className="button">
                            <CartIcon className="cart-icon" />  Add to cart
                        </button>
                    </div>
                </article>
            </section>
        </div>
    )
}

export default Home;