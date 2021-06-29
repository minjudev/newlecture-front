// 컴포넌트가 2가지
// 1. 클래스형 컴포넌트: state를 이용한 데이터 바인딩이 필요한 경우
// 2. 함수형 컴포넌트: state를 사용할 필요 없이 가볍게 페이지를 분리해서 사용할 경우(잠깐 state가 필요한 경우: Hook 사용하기)

import { Link } from "react-router-dom";

//익명 함수에 이름 주기 Name = ()=>{}
const Header = () => {
    return <header id="header">
    
        <div className="content-container">
            {/* <!-- ---------------------------<header>--------------------------------------- --> */}

            <h1 id="logo">

                <Link to="/">
                    <img src="/images/logo.png" alt="뉴렉처 온라인" />
                </Link>
            </h1>

            <section>
                <h1 className="hidden">헤더</h1>

                <nav id="main-menu">
                    <h1>메인메뉴</h1>
                    <ul>
                        <li><a href="/guide">학습가이드</a></li>

                        <li><a href="/course">강좌선택</a></li>
                        <li><a href="/answeris/index">AnswerIs</a></li>
                    </ul>
                </nav>

                <div className="sub-menu">

                    <section id="search-form">
                        <h1>강좌검색 폼</h1>
                        <form action="/course">
                            <fieldset>
                                <legend>과정검색필드</legend>
                                <label>과정검색</label>
                                <input type="text" name="q" />
                                <input type="submit" value="검색" />
                            </fieldset>
                        </form>
                    </section>

                    <nav id="acount-menu">
                        <h1 className="hidden">회원메뉴</h1>
                        <ul>
                            <li><a href="/index.html">HOME</a></li>
                            <li><a href="/member/login.html">로그인</a></li>
                            <li><a href="/member/agree.html">회원가입</a></li>
                        </ul>
                    </nav>

                    <nav id="member-menu" className="linear-layout">
                        <h1 className="hidden">고객메뉴</h1>
                        <ul className="linear-layout">
                            <li><a href="/member/home"><img src="/images/txt-mypage.png" alt="마이페이지" /></a></li>
                            {/* 이동하고 싶은 링크는 Link to로 적어주기 */}
                            {/* 태그처럼 보이지만 스크립트이므로 바깥에 Link to를 명시해줘도 됨 */}
                            <li><Link to="/customer/notice/list"><img src="/images/txt-customer.png" alt="고객센터" /></Link></li>
                        </ul>
                    </nav>
                </div>
            </section>

        </div>
    </header>
}

export default Header;