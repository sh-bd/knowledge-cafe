import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const Card = ({ card, addReadingTime, addBookMark }) => {

    const { thumbnail, profilePic, title, time, date, name, tags } = card;

    const [bookmarked, setBookmarked] = useState(false);

    const toggleBookmark = () => {
        setBookmarked(!bookmarked);
        addBookMark(title);
    }

    return (
        <div className='mb-3'>
            <div className="card">
                <img src={thumbnail} style={{'height':'410px'}} className="card-img-top" alt="" />
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center gap-1">
                            <div className="">
                                <img src={profilePic} width="70px" height="70px" className="rounded-circle" alt="" />
                            </div>
                            <div>
                                <p className="mb-0 fw-bold fs-5">{name}</p>
                                <p>{date}</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-start">
                            <p>{time} min read</p>
                            <button onClick={toggleBookmark} className="border-0 bg-body">
                                <FontAwesomeIcon icon={faBookmark} color={bookmarked ? 'red' : 'black'} />
                            </button>
                        </div>
                    </div>
                    <h5 className="card-title fs-2 my-2 fw-bold">{title}</h5>
                    <p className="card-text text-secondary">{tags}</p>
                    <a href="#" onClick={() => addReadingTime(time)}  >
                        Mark as read
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;
