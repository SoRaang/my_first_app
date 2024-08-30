import React, { useState } from 'react';

const FormTagTest = () => {
    const [inputText, setInputText] = useState('');
    const [whereIs, setWhereIs] = useState('');

    const submitHandler = (e) => {
        e.preventDefault(); // 폼 submit시의 페이지 리로드를 막기 위해 기본 동작을 막아준다.

        setInputText('이름: ' + e.target[0].value);
        console.log('입력받은 이름: ' + inputText);
    }

    const rdoList = [
        { radioLabel: '서울', value: 'Seoul' },
        { radioLabel: '부산', value: 'Busan' },
        { radioLabel: '제주', value: 'Jeju' }
    ];

    const whereHandler = (e) => {
        e.preventDefault();

        alert(whereIs);
    }

    return (
        <div>
            <h1>{ inputText }</h1>

            <form onSubmit={ submitHandler }>
                <input type="text" name="text" />

                <button type="submit">확인</button>
            </form>

            <form onSubmit={ whereHandler }>
                <h1>라디오 버튼의 value 출력하기</h1>

                {
                    rdoList.map((item, index) => {
                        return (
                            <> { /** 내부에서 선언한 컴포넌트도 이렇게 감싸 주어야 한다. */ }
                                <input key={ index } type="radio" id={ 'rdoWhere' + index } name="radio-where" value={ item.value } onChange={(e) => { setWhereIs(e.target.value) }} />
                                <label htmlFor={ 'rdoWhere' + index }>{ item.radioLabel }</label>
                            </>
                        )
                    })
                }

                <button type="submit">확인</button>
            </form>
        </div>
    );
};

export default FormTagTest;