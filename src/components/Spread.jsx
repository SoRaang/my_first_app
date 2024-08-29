import React from 'react';

const Spread = () => {
    const person1 = { name: 'Chang Wan' }
    const person2 = { ...person1, age: 15 }
    const person3 = { ...person2, region: 'Busan' } // 전개 연산자를 통해 객체를 복사하여 사용할 수 있다.
    const person4 = { region: 'Seoul', ...person3 } // 전개 순서에 따라 값이 달라질 수 있다.

    return (
        <div>
            <h1>{ JSON.stringify(person1) }</h1>
            <h1>{ JSON.stringify(person2) }</h1>
            <h1>{ JSON.stringify(person3) }</h1>
            <h1>{ JSON.stringify(person4) }</h1>
        </div>
    );
};

export default Spread;