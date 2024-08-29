import React, { useState } from 'react';
import UserID from './UserID'
import UserPW from './UserPW';

const LoginTest = () => {
    const [ loginID, setLoginID ] = useState('');
    const [ loginPW, setLoginPW ] = useState('');
    const user = { id: 'dsc0320', pw: '1q2w3e4r' }

    const getChildID = (data) => {
        setLoginID(data);
    }

    const getChildPW = (data) => {
        setLoginPW(data);
    }

    function goLogin() {
        if (loginID === user.id && loginPW === user.pw) {
            alert('로그인 성공');
        } else {
            alert('로그인 실패');
        }
    }

    return (
        <div>
            <UserID action={ getChildID } />
            <UserPW action={ getChildPW } />

            <button onClick={ goLogin }>Login</button>
        </div>
    );
};

export default LoginTest;