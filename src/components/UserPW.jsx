import React from 'react';

const userPW = ({ action }) => {
    function setLogin(e) {
        action(e.target.value);
    }

    return (
        <div>
            <input type="password" onKeyUp={ setLogin } placeholder="PASSWORD" />
        </div>
    );
};

export default userPW;