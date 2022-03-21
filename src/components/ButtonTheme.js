import React, { useContext } from "react";

import { Context } from "../Context";

const ButtonTheme = ({className}) => {

    const { stateMode, setStateMode, darkModeRules, lightModeRules} = useContext(Context);

    const changeScreenMode = () => {
        stateMode.name == "light_mode" ? setStateMode(darkModeRules) : setStateMode(lightModeRules)
    }

    return(
        <button className={className} onClick={() => changeScreenMode()}>
            <span className="material-icons">{stateMode.name}</span>
        </button>
    )
}
export default ButtonTheme;