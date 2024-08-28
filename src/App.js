import TodaysPlan from './TodaysPlan';
import logo from './logo.svg';
import './App.css';

function App() {
    const isReact = true;

    return (
        <div> { /** 컨테이너로 감싸야 함 */ }
            <h1 style={{ backgroundColor: 'blue', color: 'yellow' }}>첫번째</h1><br />
            <h2 className="my-class">리액트 실습</h2><br />
            <h3>화이팅</h3>

            <p>{ isReact === true ? '리액트입니다' : '리액트가 아닙니다' }</p>

            <TodaysPlan />
        </div>
    );
}

export default App;