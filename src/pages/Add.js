import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Loader from '../components/Loader';
import { NYTIMES_APIKEY, GOOGLEBOOKS_APIKEY } from '../API_KEYS';
import ReviewModal from '../components/ReviewModal';
import wishlistAdd from '../assets/icons/wishlist-add.png';
import reviewsAdd from '../assets/icons/reviews-add.png';
import favouritesAdd from '../assets/icons/favourites-add.png';
import '../styles/Add.scss';

function Add(props) {

    const history = useHistory();

    const { slidein, add, handleAdd } = props
    const apiNytimes = NYTIMES_APIKEY;
    const apiGoogleBooks = GOOGLEBOOKS_APIKEY;

    const [fetchedNytimes, setFetchedNytimes] = useState(false);
    const [fetchedGoogleBooks, setFetchedGoogleBooks] = useState(false);
    const [book, setBook] = useState(false);
    const [isPending, setIsPending] = useState(false);

    const [reviewModal, setReviewModal] = useState(false);

    const handleAddItem = item => {

        const storedBooks = JSON.parse(localStorage.getItem(`ReadmeApp${item}`));

        if (!storedBooks || storedBooks.filter(el => el.isbn === book.isbn).length === 0) {
            if (item !== 'Reviews') {
                const itemList = storedBooks ?
                    ([...storedBooks, book])
                    : [book];
                localStorage.setItem(`ReadmeApp${item}`, JSON.stringify(itemList));
                history.push(`/${item.toLowerCase()}`);
                handleAdd();
            } else {
                setReviewModal(true);
            }
        } else {
            alert(`${book.title} is already added to ${item}!`)
        }
    }

    const bookItem = <>
        <ul className="book__list">
            <li className="book__list-item title"><h3>{book.title}</h3></li>
        </ul>
        <div className="book__header">
            {book.thumb && <img className="book__img" src={book.thumb} alt={book.title} style={{ width: '128px', height: 'auto' }} />}
            {book.desc && <div className="book__list-item desc">{book.desc}</div>}
        </div>
        <ul className="book__list">
            <li className="book__list-item author"><span>By: </span>{book.author}</li>
            {book.pubDate && <li className="book__list-item pubdate"><span>Published: </span>{book.pubDate}</li>}
            {book.pagesNo && <li className="book__list-item pagesno"><span>Pages: </span>{book.pagesNo}</li>}
        </ul>
        {/* <div className="book__spacer"></div> */}
        <div className="book__add">
            <h3>ADD TO:</h3>
            <button onClick={() => handleAddItem('Reviews')}><img src={reviewsAdd} alt="Add review" />Reviews</button>
            <button onClick={() => handleAddItem('Favourites')}><img src={favouritesAdd} alt="Add to favourites" />Favourites</button>
            <button onClick={() => handleAddItem('Wishlist')}><img src={wishlistAdd} alt="Add to wishlist" />Wishlist</button>
        </div>
    </>

    useEffect(() => {

        const fetchData = () => {
            setIsPending(true);

            if (!fetchedNytimes) {
                fetch(`https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=${apiNytimes}`)
                    .then(response => response.json())
                    .then(json => {
                        const randItem = Math.floor(Math.random() * 14)
                        setFetchedNytimes(json.results[randItem])
                    })
                    .catch(err => console.error(err))
            }

            if (fetchedNytimes && !fetchedGoogleBooks) {
                fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${fetchedNytimes.isbns[fetchedNytimes.isbns.length - 1].isbn10}&key=${apiGoogleBooks}`)
                    .then(response => response.json())
                    .then(json => setFetchedGoogleBooks(json))
                    .catch(err => console.error(err))
            }

            if (fetchedNytimes && fetchedGoogleBooks) {
                const book = {
                    title: fetchedNytimes.book_details[0].title,
                    desc: fetchedNytimes.book_details[0].description,
                    author: fetchedNytimes.book_details[0].author,
                    pubDate: fetchedGoogleBooks.totalItems > 0 ? fetchedGoogleBooks.items[0].volumeInfo.publishedDate : "",
                    pagesNo: fetchedGoogleBooks.totalItems > 0 ? fetchedGoogleBooks.items[0].volumeInfo.pageCount : "",
                    thumb: (fetchedGoogleBooks.totalItems > 0 && typeof fetchedGoogleBooks.items[0].volumeInfo.imageLinks !== 'undefined') ? fetchedGoogleBooks.items[0].volumeInfo.imageLinks.thumbnail : "",
                    isbn: fetchedNytimes.isbns[fetchedNytimes.isbns.length - 1].isbn10
                }

                setIsPending(false);
                setBook(book);
            }
        }

        fetchData();

    }, [fetchedNytimes, fetchedGoogleBooks, apiGoogleBooks, apiNytimes])

    fetchedNytimes && fetchedGoogleBooks && console.log(fetchedNytimes);
    fetchedNytimes && fetchedGoogleBooks && console.log(fetchedGoogleBooks);

    return (
        <article className={`add ${slidein ? 'slide-card' : ''}`}>
            <div className="book">
                {book && bookItem}
            </div>
            {isPending ? <Loader /> : undefined}
            {reviewModal && <ReviewModal setReviewModal={setReviewModal} book={book} add={add} handleAdd={handleAdd} />}
        </article>
    )
}
export default Add;