// import React from 'react';
// import Header from "./components/Header";
// class App extends React.Component {
//   render () {
//     return(
//       <div>
//         <Header />
//       </div>
//     )
//   }
// }
//
// export default App;

import React from "react";
import {Link} from "react-router";
import Header from "./components/Header";
class App extends React.Component{
  render(){
    return(
        <div>
          <Header />
          <div className="container">
            {this.props.children}
          </div>
          <h3 className="ba"><a href="http://weibo.com/u/2168381922?from=myfollow_all&is_all=1">纹身师苏苏</a></h3>
        </div>
    )
  }
}
export default App;
