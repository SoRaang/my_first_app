import React, { useState } from 'react';

const TextAreaComponent = () => {
    const [textValue, setTextValue] = useState('');

    const getValue = (e) => {
        e.preventDefault();

        console.log('submit으로 받은 데이터: ' + textValue);
    }

    return (
        <div>
            <form onSubmit={ getValue }>
                <textarea onChange={(e) => { setTextValue(e.target.value) }}></textarea>

                <button type="submit">textarea 확인</button>
            </form>
        </div>
    );
};

export default TextAreaComponent;