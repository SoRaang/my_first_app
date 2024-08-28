import React from 'react';

const DefaultPropTest = (props) => { // props 전달과 default props 사용법 이해를 위한 예제
    const {
        name = '이름 없음',
        age = 0,
        address = '길거리',
        color1,
        color2,
        color3
    } = props;

    return (
        <div>
            <h1>
                안녕하세요. 제 이름은 <span style={{ color: color1 }}>{ name }</span>입니다.<br />
                저는 <span  style={{ color: color2 }}>{ age }</span>살이고, <span style={{ color: color3 }}>{ address }</span>에 살고 있습니다.
            </h1>
        </div>
    );
};

export default DefaultPropTest;