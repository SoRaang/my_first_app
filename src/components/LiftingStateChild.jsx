import React from 'react';

const LiftingStateChild = ({ action }) => {
    function inputDone(e) {
        if (e.key === 'Enter') {
            action(e.target.value); // 부모로부터 받은 state 변경 함수를 실행하면서 자신이 가진 데이터를 보낸다.
        }
    }

    return (
        <div>
            <input onKeyUp={ inputDone } type="text" name="" id="" />
        </div>
    );
};

export default LiftingStateChild;