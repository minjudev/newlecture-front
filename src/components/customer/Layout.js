import List from './notice/List';
import Detail from './notice/Detail';
import {Route, Switch} from 'react-router-dom';

const Layout = () => {
    return <div>
        <div id="visual">
            <div className="content-container"></div>
        </div>

        <div id="body">
            <div className="content-container clearfix">

                <aside className="aside">
                    <h1>고객센터</h1>

                    <nav className="menu text-menu first margin-top">
                        <h1>고객센터메뉴</h1>
                        <ul>
                            <li>
                                <a className="current" href="/customer/notice">공지사항</a>
                            </li>
                            <li>
                                <a className="" href="/customer/faq">자주하는 질문</a>
                            </li>
                            <li>
                                <a className="" href="/customer/question">수강문의</a>
                            </li>
                            <li>
                                <a className="" href="/customer/event">이벤트</a>
                            </li>

                        </ul>
                    </nav>

                    <nav className="menu">
                        <h1>협력업체</h1>
                        <ul>
                            <li>
                                <a target="_blank" href="http://www.notepubs.com"><img src="/images/notepubs.png" alt="노트펍스"/></a>
                            </li>
                            <li>
                                <a target="_blank" href="http://www.namoolab.com"><img src="/images/namoolab.png" alt="나무랩연구소"/></a>
                            </li>

                        </ul>
                    </nav>

                </aside>

                {/* main 영역 - 계속 바뀌어야 함 */}
                {/* <Router> 태그는 루트에 한 번만 있으면 됨(현재 App.js에 작성돼있음) */}
                <Switch>
                    <Route path="/customer/notice/list" component={List} />
                    <Route path="/customer/notice/:id" component={Detail} />
                    {/* detail이 아닌 id가 동적으로 와야함, 경로에 값을 사용하려면 저런 형식 사용, List component에서 Detail로 넘겨줄 때의 id 가져와 변수처럼 사용 가능 */}
                </Switch>
            </div>
        </div>

    </div>
}

export default Layout;