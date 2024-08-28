import React from 'react';

const MenuItem = ({ options }) => { // 부모 요소로부터 객체로 전달받은 props.options를 options 키워드로 재할당했다.
    // const { prop1, prop2, prop3 ... } = props; // 이런 식으로 props를 구조 분해 할당할 수도 있다.

    return (
        <div className="menu-item">
            <img src={ options.foodPicture } alt={ options.foodPicDesc } />

            <h4>{ options.foodName }</h4>
            <p>{ options.foodCategory }</p>
            <p>{ options.price }</p>
        </div>
    );
};

export default MenuItem;