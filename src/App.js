import HeaderComponent from './components/HeaderComponent';
import BodyComponent from './components/BodyComponent';
import FooterComponent from './components/FooterComponent';
import DefaultPropTest from './components/DefaultPropTest';
import MovieItem from './components/MovieItem';
import Wrapper from './components/Wrapper';
import MapExample from './components/MapExample';

import './App.css';

function App() {
    const movieList = [ // .map()으로 컴포넌트 배열 출력을 하기 위한 임시 데이터
        { id: 1, poster: 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88337/88337_320.jpg', title: '비틀쥬스 비틀쥬스', debut: '2024. 03. 20' },
        { id: 2, poster: 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88380/88380_320.jpg', title: '빅토리', debut: '2024. 03. 20' },
        { id: 3, poster: 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88403/88403_320.jpg', title: '사랑의 하츄핑', debut: '2024. 03. 20' }
    ]

    return (
        <div id="wrap">
            <HeaderComponent />

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
        </div>
    );
}

export default App;