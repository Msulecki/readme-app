import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import '../styles/ReviewModal.scss';

function ReviewModal(props) {

    const { setReviewModal, book, add, handleAdd } = props;
    const history = useHistory();
    const [rating, setRating] = useState(0);

    const handleSubmitReview = () => {
        const ratedBook = { ...book, rating }
        const itemList = localStorage.getItem(`ReadmeAppReviews`) ?
            ([...JSON.parse(localStorage.getItem(`ReadmeAppReviews`)), ratedBook])
            : [ratedBook];
        localStorage.setItem(`ReadmeAppReviews`, JSON.stringify(itemList));
        history.push('/reviews');
        add && handleAdd();
        setReviewModal(false);
    }

    const handleModalClose = e => {
        console.log(e.target);
        e.target.id === 'reviewModal' && setReviewModal(false);
    }

    return (
        <div id="reviewModal" className="review-modal" onClick={handleModalClose}>
            <div className="review-modal__title"><h2>{book.title}</h2></div>
            <h4>Rate this book</h4>
            <div className="review-modal__stars">
                <div onClick={() => setRating(6)} className="review-modal__star"></div>
                <div onClick={() => setRating(5)} className="review-modal__star"></div>
                <div onClick={() => setRating(4)} className="review-modal__star"></div>
                <div onClick={() => setRating(3)} className="review-modal__star"></div>
                <div onClick={() => setRating(2)} className="review-modal__star"></div>
                <div onClick={() => setRating(1)} className="review-modal__star"></div>
            </div>
            <div className="review-modal__submit">
                <button
                    onClick={handleSubmitReview}
                    className="review-modal__submit-button">
                    Submit review
                </button>
            </div>
        </div>
    )
}
export default ReviewModal;