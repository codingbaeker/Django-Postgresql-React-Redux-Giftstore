import { FC } from "react";
import "./styles.css";
import images from "../../assets";

const Home: FC = () => {
    const {Home1, Home2, Home3, Home4, Home5, Home6} = images;
    return (
        <div className="home-container">
            <div className="home-banner">hi
            </div>
            <div className="product-button">
                <a href="/Gifts" className="find-gift-button">
                    <button className="find-gift-button">Find the perfect Gift!</button>
                </a>
                <p className="title">Delivery Monday to Sunday!</p>
            </div>
            <div className="product-preview1">
                <div className="product">
                    <img className="preview-picture" alt="loading failed :/" src={Home1}/>
                    <p className="preview-picture-name">Sweets</p>
                </div>
                <div className="product">
                    <img className="preview-picture" alt="loading failed :/" src={Home2}/>
                    <p className="preview-picture-name">Snacks and Drinks</p>
                </div>
                <div className="product">
                    <img className="preview-picture" alt="loading failed :/" src={Home3}/>
                    <p className="preview-picture-name">Plants</p>
                </div>
            </div>
            <div className="product-preview2">
                <div className="product">
                    <img className="preview-picture" alt="loading failed :/" src={Home4}/>
                    <p className="preview-picture-name">Baloons</p>
                </div>
                <div className="product">
                    <img className="preview-picture" alt="loading failed :/" src={Home5}/>
                    <p className="preview-picture-name">Gifts</p>
                </div>
                <div className="product">
                    <img className="preview-picture" alt="loading failed :/" src={Home6}/>
                    <p className="preview-picture-name">Condolences</p>
                </div>
            </div>

        </div>
    )
}

export default Home