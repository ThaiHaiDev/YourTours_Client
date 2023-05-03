import React, { useEffect, useRef, useState } from 'react';
import { Avatar, Rating } from '@mui/material';

import evaluateApi from '../../services/evaluateApi';
import './Comment.scss';

export interface dataProps {
    idHome?: string;
}

const CommentRating = (props: dataProps) => {
    const [dataComment, setDataComment] = useState<any>([]);

    useEffect(() => {
        if (props.idHome !== undefined) {
            evaluateApi.getAllEvalueteByHomeId(props?.idHome).then((dataRes) => {
                setDataComment(dataRes.data.content);
            });
        }
    }, [props.idHome]);

    const ref = useRef<any>();
    const handleFocus = () => {
        ref.current.focus();
    };

    return (
        <>
            {dataComment.map((cmt: any, index: number) => (
                <div className="comment__item" key={index}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <div className="comment__info">
                        <div className="comment__info-user">
                            <div>
                                <p className="comment__info-name">{cmt?.fullName}</p>
                                <p className="comment__info-time">{cmt?.lateModifiedDate}</p>
                            </div>

                            <div className="star-rating">
                                <Rating
                                    name="simple-controlled"
                                    value={cmt?.rates}
                                    style={{ fontSize: '18px' }}
                                    readOnly
                                />
                            </div>
                        </div>
                        <p className="comment__info-content">{cmt?.comment}</p>
                        <p className="btn-reply" onClick={handleFocus}>
                            Reply
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default CommentRating;
