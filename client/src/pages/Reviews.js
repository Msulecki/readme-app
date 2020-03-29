import React, { useState } from 'react';
import reviewsIcon from '../assets/icons/reviewsListIcon.svg';
import '../styles/Reviews.scss';

function Reviews() {
    const storageName = 'ReadmeAppReviews';
    const [items, setItems] = useState(JSON.parse(localStorage.getItem(storageName)))
    const [activeItem, setActiveItem] = useState(null);

    const handleDelete = e => {
        const deleted = items[parseInt(e.target.dataset.index)];
        if (window.confirm(`Remove ${deleted.title}?`)) {
            const newItems = items.filter((el, i) => i !== parseInt(e.target.dataset.index));
            setItems(newItems);
            setActiveItem(null);
            localStorage.setItem(`ReadmeAppReviews`, JSON.stringify(newItems));
        }
    }

    const handleActiveItem = (i, el) => {
        if (el.target.type !== 'submit') {
            return i === activeItem ? setActiveItem(null) : setActiveItem(i)
        }
    }

    return (
        <article className="reviews">
            <ul className="books__list">
                {items && items.map((item, index) => {
                    return (
                        <li
                            key={index}
                            className={`books__list-holder ${activeItem === index ? 'active' : ''}`}>
                            <div className="books__list-item"
                                // onClick={handleActiveItem.bind(this, index)}
                                onClick={handleActiveItem.bind(this, index)}>
                                <img
                                    className="books__list-img"
                                    src={reviewsIcon}
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
                            {activeItem === index && <div className="books__list-rating">
                                {Array.from({ length: 6 }).map((el, index) => <div
                                    key={index}
                                    className={`books__list-star ${item.rating > index ? 'active' : ''}`}>
                                </div>)}
                                <h4>{`${item.rating}/6`}</h4>
                            </div>}
                        </li>
                    )
                })}
            </ul>
        </article>
    );
}
export default Reviews;