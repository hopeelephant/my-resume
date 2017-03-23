// import React from "react";
// import　{Router,Route,hashHistory,IndexRoute} from "react-router";
// import App from "./App";
// export default function (){
//   return(
//     <Router history={hashHistory}>
//       <Route path="/" component={App}>
//         <IndexRoute />
//       </Route>
//     </Router>
//   )
// }

import React from "react";
import {Router,Route,browserHistory,IndexRoute} from "react-router";
import App from "./App";
import Home from "./components/Home";
import Work from "./components/Work";
export default function(){
  return(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="work" component={Work}/>
      </Route>
    </Router>
  )
}
