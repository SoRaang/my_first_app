import React, { useState } from 'react';
import LiftingStateChild from './LiftingStateChild';

const LiftingState = () => {
    const [dataParent, setData] = useState('');

    function getChildData(data) {
        setData(data)
    }

    return (
        <div>
            <h1>자식 컴포넌트에서 받은 문자열: { dataParent }</h1> { /** 자식 컴포넌트에게서 받은 데이터를 표시한다. */ }

            <LiftingStateChild action={ getChildData } /> { /** 자식 컴포넌트에게 state 변경 함수를 props로 전달한다. */ }
        </div>
    );
};

export default LiftingState;