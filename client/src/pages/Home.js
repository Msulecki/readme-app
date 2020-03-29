import React from 'react';
import '../styles/Home.scss';

function Home() {
    return (
        <article className="home">
            <h1>Hello</h1>
            <p>This website is designed with some PWA features, that allows user to use it like a native app.
            </p>
            <p>You can click on + icon on upper-left corner to get random book from <a href="https://www.nytimes.com/books/best-sellers/" target="blank" ><u>NYTimes Best Sellers</u></a> list.</p>
            <h4>Then, you can do following things:</h4>
            <ul>
                <li>Rate (review) a book</li>
                <li>Add book to favourites</li>
                <li>Add book to wishlist</li>
            </ul>
            <p>There is a settings tab (upper-right icon) also, but for now, it's just a mockup.</p>
        </article>
    );
}
export default Home;