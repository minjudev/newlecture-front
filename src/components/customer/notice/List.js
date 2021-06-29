import React from "react";
import {Link} from "react-router-dom";
import Pager from "../../inc/Pager";

// 데이터 바인딩이 필요하므로 컴포넌트를 클래스로 만들자
export default class List extends React.Component {
    constructor(props) {
        super(props);

        // 비동기로 실행됨
        fetch("http://hi.namoolab.com:8080/api/notice/list")
        // fetch에서 만들어낸 response 객체가 오는 것
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                let list = json.list; // list라는 이름의 배열 받기
                let count = json.count;
                let lastPage = Math.floor(count / 10) + (
                    count % 10 >= 0
                        ? 1
                        : 0
                ); // 받아온 데이터를 적용시키기 위해 setState에서 변수 넣어주기

                this.setState({
                    // componentDidMount에 setState가 있을 때와의 차이점을 알아보자
                    list, // list:list(let list를 가져옴)
                    lastPage
                });

                console.log(count);
            });

        // 상태 변화가 필요한 것들을 변수로 정의해놓기 객체가 메모리에 올라갔을 때 변수로 만 렌더가 호출된 후에 마운트가 됨 1 얘는 꼭 밖에
        // 있어야 한다. 언제 요청이 올지 모르기 때문에 fetch 안으로 들어가면 안됨 render()로 렌더링이 실행될 때 초기화값이 있어야 한다
        this.state = {
            list: [],
            startPage: 1,
            lastPage: 0,
            page: 1
        };
    }

    componentDidMount() {
        // 3 
        // props 관련 - history, location, match, staticContext(라우트 관련 정보들)
        // 화면을 다시 고칠 때 사용되는 것: history, location
        for(let k in this.props)
            console.log(k);

        //this.props.history.push// push: 새로고침할 수 있게 하는 역할
    }

    // 화면 갱신을 위해 여기서 

    componentDidUpdate(prevProps) { // update 함수의 객체는 무조건 이전 props가 전달됨
                                    // 이전 props인 prevProps의 이름은 원하는 이름으로 지정 가능
        // state가 변경될 때
        // 3-2
        // ==: 값 비교, ===: 객체 비교
        if(prevProps.location.search === this.props.location.search) // 이전 상태와 요청 들어온 상태가 같으면 fetch 안하게 하기
            return;    

        //this.props.location.search // 현재 요청이 들어온 쿼리 값 알 수 있음
                                   // 요청 들어온 상태가 이전 상태와 다르다면 굳이 fetch할 필요 없음
                                   // 이전 상태는 어떻게 얻을 수 있을까?
        
        fetch(`http://hi.namoolab.com:8080/api/notice/list${this.props.location.search}`)
        // fetch에서 만들어낸 response 객체가 오는 것
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                let list = json.list; // list라는 이름의 배열 받기
                let count = json.count;
                let lastPage = Math.floor(count / 10) + (
                    count % 10 >= 0
                        ? 1
                        : 0
                ); // 받아온 데이터를 적용시키기 위해 setState에서 변수 넣어주기

                this.setState({
                    // componentDidMount에 setState가 있을 때와의 차이점을 알아보자
                    list, // list:list(let list를 가져옴)
                    lastPage
                });

                console.log(count);
            });

    }

    componentWillUnmount() {
        // 페이지가 사라질 경우
    }

    render() {
        // 2
        console.log("render");

        return (
            <main class="main">
                <h2 class="main title">공지사항</h2>

                <div class="breadcrumb">
                    <h3 class="hidden">경로</h3>
                    <ul>
                        <li>home</li>
                        <li>고객센터</li>
                        <li>공지사항</li>
                    </ul>
                </div>

                <div class="search-form margin-top first align-right">
                    <h3 class="hidden">공지사항 검색폼</h3>
                    <form class="table-form">
                        <fieldset>
                            <legend class="hidden">공지사항 검색 필드</legend>
                            <label class="hidden">검색분류</label>
                            <select name="f">
                                <option value="title">제목</option>
                                <option value="writerId">작성자</option>
                            </select>
                            <label class="hidden">검색어</label>
                            <input type="text" name="q" value=""/>
                            <input class="btn btn-search" type="submit" value="검색"/>
                        </fieldset>
                    </form>
                </div>

                <div class="notice margin-top">
                    <h3 class="hidden">공지사항 목록</h3>
                    <table class="table">
                        <thead>
                            <tr>
                                <th class="w60">번호</th>
                                <th class="expand">제목</th>
                                <th class="w100">작성자</th>
                                <th class="w100">작성일</th>
                                <th class="w60">조회수</th>
                            </tr>
                        </thead> 
                        <tbody>
                            {/* // list가 가져온 하나의 항목(n)을 가져와 내가 원하는 모양대로 나타내기 */}
                            {this.state.list.map((n) => {
                                        {
                                            /* npm date format 사용하기 */
                                        }
                                        return (
                                            <tr>
                                                <td>{n.id}</td>
                                                <td class="title indent text-align-left">
                                                    {/* 여기서 Detail로 id를 넘겨줌, detail에서는 params.id를 통해 전달받음 */}
                                                    <Link to={`/customer/notice/${n.id}`}>{n.title}</Link>
                                                    {/* Link to 안에서 문자열을 쓸 때는 잘라내서 붙여쓰기 */}
                                                </td>
                                                <td>{n.writerId}</td>
                                                <td>{n.regDate}</td>
                                                <td>{n.hit}</td>
                                            </tr>
                                        );
                                    })
                            }
                        </tbody>
                    </table>
                </div>

                <Pager history={this.props.history} location={this.props.location}/>

                <div class="indexer margin-top align-right">
                    <h3 class="hidden">현재 페이지</h3>
                    <div>
                        <span class="text-orange text-strong">{this.state.page}</span>
                        /{" "}
                        {this.state.lastPage}
                        pages
                    </div>

                </div>
            </main>
        );
    }
}
