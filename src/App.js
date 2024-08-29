import HeaderComponent from './components/HeaderComponent';
import BodyComponent from './components/BodyComponent';
import FooterComponent from './components/FooterComponent';
import DefaultPropTest from './components/DefaultPropTest';
import MovieItem from './components/MovieItem';
import Wrapper from './components/Wrapper';
import MapExample from './components/MapExample';
import Spread from './components/Spread';

import './App.css';
import { useState } from 'react';
import LiftingState from './components/LiftingState';
import LoginTest from './components/LoginTest';

function App() {
    const movieList = [ // .map()으로 컴포넌트 배열 출력을 하기 위한 임시 데이터
        { id: 1, poster: 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88337/88337_320.jpg', title: '비틀쥬스 비틀쥬스', debut: '2024. 03. 20' },
        { id: 2, poster: 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88380/88380_320.jpg', title: '빅토리', debut: '2024. 03. 20' },
        { id: 3, poster: 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88403/88403_320.jpg', title: '사랑의 하츄핑', debut: '2024. 03. 20' }
    ]

    const [greet, setGreet] = useState('안녕하세요 저는 첫 state 입니다'); // useState()
    const [font, setFont] = useState('50px');
    const [num, setNum] = useState(0);
    const [user, setUser] = useState('안녕하세요');
    const [sayHi, setSayHi] = useState(['안녕', '하이']); // 객체 또는 배열이 state일 경우

    const fontStyle = {
        fontSize: font
    }

    const changeFont = () => {
        setGreet('지금은 다른 state 입니다');
        setFont('90px');
    }

    const addUp = () => {
        setNum(num + 1);
    }

    const gotoZero = () => {
        setNum(0);
    }

    const login = () => {
        setUser('로그인 되었습니다.');
    }

    const logout = () => {
        setUser('로그아웃 되었습니다.');
    }

    const changeArray = () => { // 객체 또는 배열이 state일 때는, 해당 객체나 배열을 복사하여 원하는 인덱스의 값을 변경한다.
        let tempArr = [ ...sayHi ];
        tempArr[1] = 'Hello';

        setSayHi(tempArr);
    }

    return (
        <div id="wrap">
            <HeaderComponent />

            <h1 style={ fontStyle }>{ greet }</h1> { /** useState()의 사용 예시 */ }
            <button onClick={ changeFont }>state 변경 클릭</button>

            <h2>이것은 증가하는 숫자: { num }</h2>
            <button onClick={ addUp } onMouseLeave={ gotoZero }>숫자 증가시키기</button>

            <h2>{ user }</h2>
            <button onClick={ login }>로그인</button>
            <button onClick={ logout }>로그아웃</button>

            <BodyComponent />

            <FooterComponent />

            <DefaultPropTest name="김창완" age={ 30405 } address="부산" color1="slateblue" color2="yellowgreen" color3="crimson" />

            <Wrapper> { /** 내부의 태그를 props.children으로 전달한다. */ }
                리액트
            </Wrapper>

            <div id="movieContainer"> { /** movieList 배열을 반복 출력한다. */ }
                {
                    movieList.map(movie => <MovieItem key={ movie.id } poster={ movie.poster } title={ movie.title } debut={ movie.debut } />)
                }
            </div>

            <MapExample />

            <Spread />

            <h2>{ sayHi[0] }</h2>
            <h2>{ sayHi[1] }</h2>

            <button onClick={ changeArray }>배열 값 변경</button>

            <LiftingState />

            <LoginTest />
        </div>
    );
}

export default App;