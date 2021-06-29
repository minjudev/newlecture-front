import React from "react";
import { Link } from "react-router-dom";

export default class Detail extends React.Component {

    // this.state
    // this.props: 컴포넌트 간의 매개체(상위 컴포넌트가 하위 컴포넌트 이용 시 공유 저장소로서 props가 매개값 전달 가능)

    constructor(props) { // 생성자에서 prop을 받고, props는 반드시 부모로 전달해주기
        super(props); // super가 props를 this로 받아줌
        // this.props = props; 
        // super에 props를 넘겨주면 super가 알아서 this.props에 내 props를 담아줌
        // render에서 사용할 때는 그냥 props가 아닌 this.props해서 써줘야함

        let id = props.match.params.id; // params를 match 객체에 담아서 줌
        // id를 아래 경로로 전달
        
        fetch(`http://hi.namoolab.com:8080/api/notice/${id}`)
        // fetch에서 만들어낸 response 객체가 오는 것
        .then(response=>{
            return response.json();
        }) 
        .then(json/*n*/=>{ // api에서 봤을 때 json이 객체 하나로 나오고 그것의 이름을 n으로 하겠다는 의미
            this.setState({n:json/*n*/}) // this.state와 json 데이터 구조가 같으므로 n으로 바로 받아서 사용 가능
        });

        this.state={
            // n을 null로 초기화하면 안됨
            n:{id: 0, title: "", content: "", writerId: "", regDate: "", hit: 0}
        }
    }

    componentDidMount() {
        // 여기서 데이터를 fetch해주나 생성자에서 세팅해주나 큰 차이는 없다!
    } 

    render() {
        return <main>
        <h2 className="main title">공지사항</h2>

        {/* <Breadcrumb x={3}/> // this.props.x 이렇게 꺼내쓸 수 있다! */}
        
        <div className="breadcrumb">
            <h3 className="hidden">breadlet</h3>
            <ul>
                <li>home</li>
                <li>고객센터</li>
                <li>공지사항</li>
            </ul>
        </div>
        
        <div className="margin-top first">
                <h3 className="hidden">공지사항 내용</h3>
                <table className="table">
                    <tbody>
                        <tr>
                            <th>제목</th>
                            <td className="text-align-left text-indent text-strong text-orange" colspan="3">{this.state.n.title}</td>
                        </tr>
                        <tr>
                            <th>작성일</th>
                            <td className="text-align-left text-indent" colspan="3">{this.state.n.regDate}</td>
                        </tr>
                        <tr>
                            <th>작성자</th>
                            <td>{this.state.n.writerId}</td>
                            <th>조회수</th>
                            <td>{this.state.n.hit}</td>
                        </tr>
                        <tr>
                            <th>첨부파일</th>
                            <td colspan="3"></td>
                        </tr>
                        <tr className="content">
                            <td colspan="4">{this.state.n.content}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div className="margin-top text-align-center">
                <Link className="btn btn-list" to="/customer/notice/list">목록</Link>
            </div>
            
            <div className="margin-top">
                <table className="table border-top-default">
                    <tbody>
                        
                        <tr>
                            <th>다음글</th>
                            <td colspan="3"  className="text-align-left text-indent">다음글이 없습니다.</td>
                        </tr>
                        
                        <tr>
                            <th>이전글</th>
                            <td colspan="3"  className="text-align-left text-indent"><a className="text-blue text-strong" href="">스프링 DI 예제 코드</a></td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>			
            
    </main>;
    }
}