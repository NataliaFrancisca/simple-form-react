import React, { useState } from "react";

import { Context } from "./Context";

import { GlobalStyles} from "./styles/GlobalStyles";
import { AppStyles } from './styles/AppStyles'
import { ButtonThemeStyle } from "./styles/ButtonThemeStyle"
import { FormStyled} from "./styles/FormStyles";

function App() {

  const darkModeRules = {
    name: "dark_mode",
    styleRules: {fg: "#DCDCDC", bg: '#1C1C1C', hv: "lightblue", error: "#FF4E56"}
   
  }

  const lightModeRules = {
      name: "light_mode",
      styleRules: {fg: '#363636', bg: "#FFFAFA", hv: "orangered", error: "#CD1C24"}
  }
  
   const [stateMode, setStateMode] = useState(lightModeRules);

  return (
    <Context.Provider value={{stateMode, setStateMode, darkModeRules, lightModeRules}}>
      <AppStyles>
        <GlobalStyles actualTheme={stateMode.styleRules}/>
        <FormStyled legendColor={stateMode.styleRules} />
        <ButtonThemeStyle actualTheme={stateMode.styleRules} />
      </AppStyles>
    </Context.Provider>
  );
}

export default App;
