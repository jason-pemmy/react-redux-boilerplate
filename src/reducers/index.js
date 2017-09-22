import { combineReducers } from "redux";

import togglePreloader from "./toggle-preloader-reducer";

const allReducers = combineReducers({ 
    togglePreloader: togglePreloader,
});

export default allReducers;