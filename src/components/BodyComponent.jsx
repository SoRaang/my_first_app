import React from 'react';
import MenuItem from './MenuItem';

const BodyComponent = () => {
    const foodList = [
        {
            foodPicture: './food1.jpg',
            foodPicDesc: '맛있는 돈까스 사진',
            foodName: '돈까스',
            foodCategory: '경양식',
            price: 25000
        },
        {
            foodPicture: './food2.jpg',
            foodPicDesc: '맛있는 기사식당 제육덮밥 사진',
            foodName: '제육덮밥',
            foodCategory: '한식',
            price: 15500
        },
        {
            foodPicture: './food3.jpg',
            foodPicDesc: '맥도날드 더블 쿼터파운더 치즈 사진',
            foodName: '햄버거',
            foodCategory: '양식',
            price: 17000
        }
    ]

    return (
        <div id="menuWrapper">
            <MenuItem options={ foodList[0] } />
            <MenuItem options={ foodList[1] } />
            <MenuItem options={ foodList[2] } />
        </div>
    );
};

export default BodyComponent;