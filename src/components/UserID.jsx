import React from 'react';

const userID = ({ action }) => {
    function setLogin(e) {
        action(e.target.value);
    }

    return (
        <div>
            <input type="text" onKeyUp={ setLogin } placeholder="ID" />
        </div>
    );
};

export default userID;