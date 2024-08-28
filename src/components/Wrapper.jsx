import React from 'react';

const Wrapper = ({ children }) => { // props.children을 설명하기 위한 예제 컴포넌트
    const style = {

    }

    return (
        <div style={ style }>
            children의 값은 { children }입니다.
        </div>
    );
};

export default Wrapper;