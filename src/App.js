import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Index from './components/Index';
import CustomerLayout from './components/customer/Layout';
import Footer from './components/Footer';

function App() { // 화면에 나오는 것
  return ( // 라우터: 어떤 url이 오면 인덱스 컴포넌트가 나타나게 하기
    <Router> 
    {/* // Router: 전체를 감싸야함 */}
    <div>
      <Header />
      {/* 경로에 따라 바뀌길 원하는 페이지 표기 */}
      <Switch>
        <Route exact path="/" component={Index} />
        {/* /로 시작하는 모든 것에는 Index 컴포넌트가 오게 됨 */}
        {/* exact를 써주게 되면 정확히 그 경로에 컴포넌트가 매칭됨 */}
        <Route path="/customer" component={CustomerLayout} />
     </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
