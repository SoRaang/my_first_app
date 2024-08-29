import React from 'react';

const MovieItem = ({ poster, title, debut }) => {
    return (
        <div>
            <img src={ poster } alt="" />
            <h3>제목 : { title }</h3>
            <h4>개봉일 : { debut }</h4>
        </div>
    );
};

export default MovieItem;