// import React from 'react';
// import {render} from 'react-dom';
// import Routers from "./routes";
// import "./main.css";
// render(<Routers />,document.getElementById('root'));


import React from "react";
import {render} from "react-dom";
import Routers from "./routes";
import "./main.css";
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();
render(<Routers/>,document.getElementById("root"))
