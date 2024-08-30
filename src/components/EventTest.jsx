import React, { useState } from 'react';
import CheckBoxElement from './CheckBoxElement';

const EventTest = () => {
    const [myFont, setMyFont] = useState();
    const [myColor, setMyColor] = useState('inherit');
    const [userInfo, setUserInfo] = useState({username: '', userdesc: ''});
    const [message, setMessage] = useState({title: '제목', color: 'black'});
    const [shopList, setShopList] = useState(0); // 체크박스 실습을 위한 state
    const [whatFruit, setWhatFruit] = useState('apple'); // select 실습을 위한 state

    const onChangeHandler = (e) => { // 같은 객체로 된 state를 반복하여 조작하기 위한 이벤트 핸들러
        const newData = { ...userInfo, [e.target.name]: e.target.value } // 대괄호를 이용해 객체의 key 값을 선택했다.

        setUserInfo(newData);
    }

    const shopItems = [ // 체크박스 실습을 위한 상품 배열
        { itemName: 'hat', itemLabel: '모자', itemPrice: 10000 },
        { itemName: 'shoes', itemLabel: '신발', itemPrice: 30000 },
        { itemName: 'bag', itemLabel: '가방', itemPrice: 80000 }
    ]

    const checkItem = (e) => { // 체크박스 실습을 위한 함수
        let num = parseInt(e.target.value);

        if (e.target.checked) {
            // React 방식으로 이전 state를 가지고 오는 법 - 콜백 함수로 매개 변수를 선언한다.

            setShopList(prevState => prevState + num)
        } else {
            setShopList(prevState => prevState - num);
        }
    }

    const itemList = shopItems.map((item, index) => { // 체크박스 실습
        return <CheckBoxElement key={ index } itemName={ item.itemName } itemLabel={ item.itemLabel } itemPrice={ item.itemPrice } action={ checkItem } />
    });

    return (
        <div>
            <h1 style={{ color: myColor, fontSize: myFont + 'px' }}>이벤트에 매개 변수를 넣는 테스트</h1>

            <button onClick={() => { setMyFont(100) }}>클릭</button>
            <button onClick={() => { setMyColor('crimson') }}>빨간색</button>
            <button onClick={() => { setMyColor('slateblue') }}>파란색</button>
            <button onClick={() => { setMyColor('yellowgreen') }}>초록색</button>

            { /** 객체 state 다루기 */ }

            <h1>사용자명: { userInfo.username }</h1>
            <h1>내용: { userInfo.userdesc }</h1>
            <input type="text" name="username" onChange={ onChangeHandler } />
            <input type="text" name="userdesc" onChange={ onChangeHandler } />

            <h1 style={{ color: message.color }}>{ message.title }</h1>
            <hr />
            <input onChange={(e) => { setMessage({ title: e.target.value, color: 'red' }) }} type="text" />
            <button onClick={() => alert(message.title)}>클릭</button>

            { /** 체크박스 & 자식 컴포넌트, state 올려보내기 */ }

            <ul>
                { itemList }
            </ul>

            <p>합계 : { shopList } 원</p>

            <hr />

            <h1>select 테스트</h1>

            <form onSubmit={ console.log(whatFruit) }>
                <select value={ whatFruit } onChange={(e) => { setWhatFruit(e.target.value); }}>
                    <option value="banana">바나나</option>
                    <option value="orange">오렌지</option>
                    <option value="apple">사과</option>
                    <option value="peach">복숭아</option>
                    <option value="cherry">체리</option>
                </select>

                <button type="submit">과일 전송</button>
            </form>
        </div>
    );
};

export default EventTest;