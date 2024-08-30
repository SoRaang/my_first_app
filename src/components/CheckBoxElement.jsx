import React from 'react';

const CheckBoxElement = (props) => {
    const { itemName, itemLabel, itemPrice, action } = props;

    return (
        <div>
            <input type="checkbox" id={ itemName } value={ itemPrice } onChange={(e) => { action(e) }} />
            <label htmlFor={ itemName }>{ itemLabel } - { itemPrice } 원</label>
        </div>
    );
};

export default CheckBoxElement;