import React, { useEffect, useState } from 'react';
import { Avatar, Pagination, Rating, Stack } from '@mui/material';

import evaluateApi from '../../services/evaluateApi';
import './Comment.scss';

export interface dataProps {
    idHome?: string;
    rate?: any;
}

const CommentRating = (props: dataProps) => {
    const [dataComment, setDataComment] = useState<any>([]);
    const [pagination, setPagination] = useState<any>({
        limit: 5,
        page: 0,
        total: 0,
    });
    const [totalPage, setTotalPage] = useState<number>(1);

    const stringToColor = (string: string) => {
        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */

        return color;
    };

    const stringAvatar = (name: string) => {
        return {
            sx: {
                bgcolor: stringToColor(name),
            },
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    };

    const handleChangePagination = (event: React.ChangeEvent<unknown>, page: number) => {
        setPagination({
            ...pagination,
            page: page - 1,
        });
    };

    useEffect(() => {
        if (props.idHome !== undefined) {
            evaluateApi.getAllEvalueteByHomeId(props?.idHome, pagination).then((dataRes) => {
                setDataComment(dataRes.data.content);
                setPagination({
                    ...pagination,
                    total: dataRes.data.totalElements,
                });
                setTotalPage(Math.ceil((dataRes.data.totalElements || 0) / pagination.limit));
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pagination.page, props.idHome]);

    return (
        <>
            <div style={{ display: 'flex', marginBottom: '5px', alignItems: 'center' }}>
                <p style={{ fontSize: '16px', fontWeight: 'bold', marginRight: '5px' }}>{`${
                    props.rate ? props.rate : '0'
                }/5`}</p>
                <Rating name="half-rating-read" defaultValue={props.rate ? props.rate : 0} precision={0.5} readOnly />
                <p style={{ fontSize: '16px', marginLeft: '15px' }}>{`${pagination.total}+ đánh giá`}</p>
            </div>
            {dataComment.map((cmt: any, index: number) => (
                <div className="comment__item" key={index}>
                    <Avatar {...stringAvatar(cmt?.fullName)} />
                    <div className="comment__info">
                        <div className="comment__info-user">
                            <div style={{ marginRight: '10px' }}>
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
                    </div>
                    <hr className="line" />
                </div>
            ))}
            {totalPage > 1 ? (
                <div className="paging">
                    <Stack spacing={2}>
                        <Pagination
                            count={totalPage}
                            variant="outlined"
                            shape="rounded"
                            size="medium"
                            onChange={handleChangePagination}
                        />
                    </Stack>
                </div>
            ) : (
                <></>
            )}
        </>
    );
};

export default CommentRating;
