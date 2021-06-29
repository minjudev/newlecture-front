import React from "react";
import {Link} from "react-router-dom";
import queryString from "query-string";

export default class Pager extends React.Component {

    constructor(props) { // props: 호출자가 전달할 때 전달하는 내용(List에서 전달)
        super(props);
    }

    pageClick(page, e) { // page 번호에 맞게 데이터 요청이 필요, 근데 page 요청하는 곳에서 fetch로 데이터를 요청하는 게 맞나 No!
                         // 데이터를 가져와 업무 로직을 처리하면 안됨, List한테 페이지가 바뀌었다는 걸 알려주기만 하기
        // 모든 컴포넌트는 prop을 가지고 있음
        // for(let k in this.props) // prop은 누가 호출했는지에 따라 담겨있는 게 다름!
        //     console.log(k);

        //this.props.history.push("list") // Link와 같이 새로고침하는 역할, list의 render를 호출하자!
        console.log("e" + this, page, e.target);
    }

    render() { 

        let query = queryString.parse(this.props.location.search); // ?p=1&q=?f=? 여기서 p를 뽑아내는 기능이 리액트에는 없음
                                                                   // query-stirng 모듈을 얻어서 뽑아내기 가능
        let page = query.p || 1; // query.p가 null, undefined이면 기본값 1
        console.log(page);

        return (
            <div className="margin-top align-center pager">
                <div>
                    <span className="btn btn-prev" onClick={()=>{alert('이전 페이지가 없습니다.');}}>
                        이전
                    </span>
                </div>
                <ul className="-list- center">
                    {
                        // new Array(5).fill(1).map;
                        [1,1,1,1,1].map((v, i)=> { 
                            {/* 앞에는 배열의 값들, 뒤에는 배열의 인덱스 */}
                            return <li><Link className="-text- orange bold" 
                                            to={`?p=${i+1}&t=&q=`}
                                            onClick={this.pageClick.bind(this, i+1)}>{i+1}</Link></li>
                                            {/* bind는 함수 호출 시 여러 인자 받기 가능, 항상 첫번째 인자는 this,
                                            나머지 인자는 pageClick에서 차례대로 받아주자. 
                                            실제 event 객체는 우선순위가 가장 뒤로 밀리게 됨 */}
                        })
                    }
                </ul>
                <div>
                    <span className="btn btn-next">
                        다음
                    </span>
                </div>
            </div>
        );
    }
}
