import React, { useState } from 'react';

const AddUpChild = (props) => {
    const [num, setNum] = useState(0);

    const countThisUp = () => {
        setNum(num + 1);
        props.onCount();
    }

    return (
        <div className="add-up-child">
            <h3>{ num }</h3>

            <button type="button" onClick={ countThisUp }>추가</button>
        </div>
    );
};

export default AddUpChild;