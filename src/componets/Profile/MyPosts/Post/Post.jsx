import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    //console.log(props.message);
    // debugger;
    return (
        <div className={s.item}>
            <img src='https://hornews.com/images/news_large/c1d4b2b8ec608ea72764c5678816d5c9.jpg' />
            {props.message}
            <div>
                <span>like</span>
            </div>
        </div>
    );
};

export default Post;