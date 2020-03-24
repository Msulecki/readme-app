import React, { useState } from 'react';
import ReviewModal from '../components/ReviewModal';
import wishlistIcon from '../assets/icons/wishlistListIcon.svg';
import '../styles/Wishlist.scss';

function Wishlist() {
    const storageName = 'ReadmeAppWishlist';
    const [items, setItems] = useState(JSON.parse(localStorage.getItem(storageName)));
    const [reviewModal, setReviewModal] = useState(false);
    const [currentBook, setCurrentBook] = useState(null);

    const handleDelete = e => {
        const deleted = items[parseInt(e.target.dataset.index)];
        if (window.confirm(`Remove ${deleted.title}?`)) {
            const newItems = items.filter((el, i) => i !== parseInt(e.target.dataset.index));
            setItems(newItems);
            localStorage.setItem(`ReadmeAppWishlist`, JSON.stringify(newItems));
        }

    }

    const handleAddReview = (book, e) => {
        if (e.target.type !== 'submit') {
            setCurrentBook(book);
            setReviewModal(true);
        }
    }
    return (
        <article className="wishlist">
            {reviewModal && currentBook && <ReviewModal setReviewModal={setReviewModal} book={currentBook} />}
            <ul className="books__list">
                {items && items.map((item, index) => {
                    return (
                        <li
                            className="books__list-holder"
                            key={index}
                            onClick={handleAddReview.bind(this, item)}>
                            <div className="books__list-item">
                                <img
                                    className="books__list-img"
                                    src={wishlistIcon}
                                    alt={item.title} />
                                <div className="books__list-text">
                                    <h5>{item.title}</h5>
                                    <span>{item.author}</span>
                                </div>
                                <button
                                    data-index={index}
                                    onClick={handleDelete}
                                    className="books__list-delete">
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </article>
    )
}
export default Wishlist;