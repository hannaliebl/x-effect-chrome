import React from "react";
import ReactDOM from "react-dom";
import XEffectContainer from "./components/XEffectContainer";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

ReactDOM.render(<XEffectContainer />, document.getElementById("root"));
registerServiceWorker();
