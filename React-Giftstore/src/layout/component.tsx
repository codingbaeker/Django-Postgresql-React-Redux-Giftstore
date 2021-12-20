import { FC } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import images from "../assets";
import { useDispatch, useSelector } from "react-redux";
import { userTokenSelector } from "../redux/user/selectors";
import { loadingSelector } from "../redux/ui/selectors";
import { logoutSuccess } from "../redux/user/actions";

const Layout: FC = ({children}) => {

    const {Logo, FacebookLogo, InstagramLogo, TwitterLogo} = images;

    const tokenUser = useSelector(userTokenSelector);
    const loading = useSelector(loadingSelector);

    const dispatch = useDispatch()

    const logoutUser = () => {
        dispatch(logoutSuccess());
    }

    return (
        <div className="giftstore-container">
            <header className="giftstore-header">
                <Link to="/">
                    <img className="giftstore-logo" alt="loading failed :/" src={Logo}/>
                </Link>
                <ul className="giftstore-first-options">
                    <li className="clickable">
                        <Link to ="/" className="link">Home</Link>
                    </li>
                    <li className="clickable">
                        <Link to ="/Gifts" className="link">Gifts</Link>
                    </li>
                    <li className="clickable">Order</li>
                </ul>
                <ul className="giftstore-second-options">
                    <li className="=clickable">Contact</li>
                    {!tokenUser ? (

                    <li className="=clickable">
                        <Link to ="/Login" className="link">Administration</Link>
                        </li>) : <a href="/">
                                    <button
                                    className="button-black"
                                    onClick={logoutUser}
                                    > LogOut
                                    </button>
                                </a>}
                </ul>
            </header>
            <div className="giftstore-content">{children}</div>
            <footer className="giftstore-footer">
                <ul className="giftstore-footer-options">
                    <li className="giftstore-footer-title">Help and Information</li>
                    <li className="giftstore-footer-deco"> __________________________</li>
                    <li className="clickable">Coverage</li>
                    <li className="clickable">How to buy?</li>
                    <li className="clickable">Shipping Policies</li>
                    <li className="clickable">Frequent Questions</li>
                </ul>
                <div className="social-media">
                    <img className="social-media-logo" alt="FacebookLogo" src={FacebookLogo}/>
                    <img className="social-media-logo" alt="InstagramLogo" src={InstagramLogo}/>
                    <img className="social-media-logo" alt="TwitterLogo" src={TwitterLogo}/>
                </div>
                <ul className="giftstore-footer-options">
                    <li className="giftstore-footer-title">Get to know us</li>
                    <li className="giftstore-footer-deco"> __________________________</li>
                    <li className="clickable">Who are we?</li>
                    <li className="clickable">Comments and Suggestions</li>
                    <li className="clickable">Garanties</li>
                </ul>
            </footer>
        </div>
    )
}

export default Layout