import { Avatar } from '@mui/material';
import React, { useRef } from 'react';

import './Comment.scss';

const CommentRating = () => {
    const ref = useRef<any>();
    const handleFocus = () => {
        ref.current.focus();
    };
    return (
        <>
            <div className="comment__item">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <div className="comment__info">
                    <div className="comment__info-user">
                        <div>
                            <p className="comment__info-name">Thai Hai</p>
                            <p className="comment__info-time">12:00:00</p>
                        </div>

                        <div className="star-rating">
                            <img
                                src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6a1fad158b76ff0ed231eceede8458f2.svg"
                                alt="icon__star"
                                style={{ width: '12px', height: '12px' }}
                            />
                            <img
                                src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6a1fad158b76ff0ed231eceede8458f2.svg"
                                alt="icon__star"
                                style={{ width: '12px', height: '12px' }}
                            />
                            <img
                                src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6a1fad158b76ff0ed231eceede8458f2.svg"
                                alt="icon__star"
                                style={{ width: '12px', height: '12px' }}
                            />
                            <img
                                src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6a1fad158b76ff0ed231eceede8458f2.svg"
                                alt="icon__star"
                                style={{ width: '12px', height: '12px' }}
                            />
                            <img
                                src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6a1fad158b76ff0ed231eceede8458f2.svg"
                                alt="icon__star"
                                style={{ width: '12px', height: '12px' }}
                            />
                        </div>
                    </div>
                    <p className="comment__info-content">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    <p className="btn-reply" onClick={handleFocus}>
                        Reply
                    </p>
                </div>
            </div>
            <div className="comment__item">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <div className="comment__info">
                    <div className="comment__info-user">
                        <div>
                            <p className="comment__info-name">Thai Hai</p>
                            <p className="comment__info-time">12:00:00</p>
                        </div>

                        <div className="star-rating">
                            <img
                                src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6a1fad158b76ff0ed231eceede8458f2.svg"
                                alt="icon__star"
                                style={{ width: '12px', height: '12px' }}
                            />
                            <img
                                src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6a1fad158b76ff0ed231eceede8458f2.svg"
                                alt="icon__star"
                                style={{ width: '12px', height: '12px' }}
                            />
                            <img
                                src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6a1fad158b76ff0ed231eceede8458f2.svg"
                                alt="icon__star"
                                style={{ width: '12px', height: '12px' }}
                            />
                            <img
                                src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6a1fad158b76ff0ed231eceede8458f2.svg"
                                alt="icon__star"
                                style={{ width: '12px', height: '12px' }}
                            />
                            <img
                                src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6a1fad158b76ff0ed231eceede8458f2.svg"
                                alt="icon__star"
                                style={{ width: '12px', height: '12px' }}
                            />
                        </div>
                    </div>
                    <p className="comment__info-content">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    <p className="btn-reply" onClick={handleFocus}>
                        Reply
                    </p>
                </div>
            </div>
            <form>
                <textarea ref={ref} className="comment-input" />
            </form>
        </>
    );
};

export default CommentRating;
