import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Nav.scss';
import HomeIcon from '../assets/icons/home.svg';
import ReviewsIcon from '../assets/icons/reviews.svg';
import FavouritesIcon from '../assets/icons/favourites.svg';
import WishlistIcon from '../assets/icons/wishlist.svg';

function Nav() {
    return (
        <nav className="nav">
            <ul>
                <li><NavLink to="/home"><img src={HomeIcon} alt="Home" />Home</NavLink></li>
                <li><NavLink to="/reviews"><img src={ReviewsIcon} alt="Reviews" />Reviews</NavLink></li>
                <li><NavLink to='/favourites'><img src={FavouritesIcon} alt="Favourites" />Favourites</NavLink></li>
                <li><NavLink to='/wishlist'><img src={WishlistIcon} alt="Wishlist" />Wishlist</NavLink></li>
            </ul>
        </nav>
    )
}
export default Nav;