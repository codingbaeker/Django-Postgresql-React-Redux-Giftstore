import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { popLoading, pushLoading } from "../../redux/ui/actions";
import { Product } from "../../models/gifts/types";
import { fetchProducts } from "../../services/gifts/services";
import { Link } from "react-router-dom";
import "./styles.css"
import { userTokenSelector } from "../../redux/user/selectors";

const Gifts: FC = () => {

    const tokenUser = useSelector(userTokenSelector);

    const dispatch = useDispatch();
    const [products, setProducts] = useState<Product[] | null> (null);

    useEffect(() => {
        const getProducts = async () => {
            try {
                dispatch(pushLoading());
                const recievedProducts = await fetchProducts();
                setProducts(recievedProducts);
            } catch (error: any) {
                console.error(error.message);
            } finally {
                dispatch(popLoading());
            };
        };
        if(products === null){
            getProducts();
        };
    }, [dispatch, products]);
        
    return (
        <div className="gifts-container">
            <div className="gifts-top">
                <p className="gifts-title">Our Products</p>
                <p className="gifts-description-title">
                    Enviar flores es sencillo con Giftstore.com, ¡Regala una sonrisa!
                </p>
                <p className="gifts-description">
                    Sorprende con los mejores regalos y flores en  todo México.
                    Te garantizamos la mejor experiencia de compra con envío express los 365 días del año.
                    ¡Envía flores hoy!
                </p>
            </div>
            <div className="gifts-products">
                {products?.map((product) => (
                    <div className="product-info"
                        key={`${product.name}`}>
                        <img className="product-info-picture" src={`${product.picture}`} alt="loading failed :/"/>
                        <p className="product-info-name">
                            {`${product.name}`}
                        </p>
                        <p className="product-info-description">
                            {`${product.description}`}
                        </p>
                        <p className="product-info-price">
                            {`${product.price} MX$`}
                        </p>
                        <p className="product-info-availability">
                            {`On stock: ${product.availability}`}
                        </p>
                    </div>
                ))};
            </div>
            <div className="custumize-options">
                {tokenUser ? (
                    <li className="custumize-options-links">
                        <Link className="custumize-link" to="/Gifts/addGifts">Add Products</Link>
                        <Link className="custumize-link" to="/Gifts/deleteGifts">Delete Products</Link>
                        <Link className="custumize-link" to="/Gifts/updateGifts">Update Products</Link>
                    </li>
                ): <p>Thank you!</p>
                }
            </div>
        </div>
    );
};

export default Gifts