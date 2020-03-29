import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../pages/Home';
import Favourites from '../pages/Favourites';
import Reviews from '../pages/Reviews';
import Wishlist from '../pages/Wishlist';
import '../styles/Main.scss';

function Main() {
    return (
        <section className="main">
            <Switch>
                <Route path='/home'>
                    <Home />
                </Route>
                <Route path='/favourites'>
                    <Favourites />
                </Route>
                <Route path='/reviews'>
                    <Reviews />
                </Route>
                <Route path='/wishlist'>
                    <Wishlist />
                </Route>
                <Redirect from='/' to='/home' />
            </Switch>
        </section>
    );
}
export default Main;