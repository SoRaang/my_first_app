import HeaderComponent from './components/HeaderComponent';
import BodyComponent from './components/BodyComponent';
import FooterComponent from './components/FooterComponent';
import DefaultPropTest from './components/DefaultPropTest';

import './App.css';
import Wrapper from './components/Wrapper';

function App() {
    return (
        <div id="wrap">
            <HeaderComponent />

            <BodyComponent />

            <FooterComponent />

            <DefaultPropTest name="김창완" age={ 30405 } address="부산" color1="slateblue" color2="yellowgreen" color3="crimson" />

            <Wrapper>
                리액트
            </Wrapper>
        </div>
    );
}

export default App;