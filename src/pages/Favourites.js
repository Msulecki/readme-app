import React, { useState } from 'react';
import favouritesIcon from '../assets/icons/favouritesListIcon.svg';
import '../styles/Favourites.scss';

function Favourites() {
    console.log('render favourites');
    const storageName = 'ReadmeAppFavourites';
    const [items, setItems] = useState(JSON.parse(localStorage.getItem(storageName)))

    const handleDelete = e => {
        const deleted = items[parseInt(e.target.dataset.index)];
        if (window.confirm(`Remove ${deleted.title}?`)) {
            const newItems = items.filter((el, i) => i !== parseInt(e.target.dataset.index));
            setItems(newItems);
            localStorage.setItem(`ReadmeAppFavourites`, JSON.stringify(newItems));
        }

    }

    return (
        <article className="favourites">
            <ul className="books__list">
                {items && items.map((item, index) => {
                    return (
                        <li
                            className="books__list-holder"
                            key={index}>
                            <div className="books__list-item">
                                <img
                                    className="books__list-img"
                                    src={favouritesIcon}
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
export default Favourites;