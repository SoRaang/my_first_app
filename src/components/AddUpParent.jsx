import React, { useState } from 'react';
import AddUpChild from './AddUpChild';

const AddUpParent = () => {
    const [count, setCount] = useState(0);

    function countUp() {
        setCount(prev => prev + 1);
    }

    return (
        <div>
            <h2>총 클릭 횟수: { count }</h2>

            <AddUpChild onCount={ countUp } />
            <AddUpChild onCount={ countUp } />
        </div>
    );
};

export default AddUpParent;