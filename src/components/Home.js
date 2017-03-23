import React from "react";
import Hope from "./images/hope.png";
export default class Home extends React.Component{
  render(){
    return(
      <div className="tattoo">
        <div className="des">
            <div className="background"></div>
            <img className="avatar" src={Hope} />
            <h2>个人信息</h2>
            <div className="hobby">
              <p>爱编程，爱英语</p>
              <p>喜欢骑车，喜欢健身</p>
            </div>
            <h2>联系方式</h2>
            <div className="hobby">
              <p>邮箱：765846396@qq.com</p>
              <p>微信：hopeelephant</p>
            </div>
            <h2>社交账号</h2>
            <ul className="social">
              <li><a href="http://www.weibo.com/6136615664/profile?rightmod=1&wvr=6&mod=personinfo&is_all=1"><i className="fa fa-weibo"></i></a></li>
              <li><a href="https://github.com/hopeelephant"><i className="fa fa-github"></i></a></li>
            </ul>
        </div>
        <div className="intro">
          
        </div>
      </div>
    )
  }
}
