import React from "react";
import Form from "./components/Form";
import { GlobalStyles} from "./styles/GlobalStyles";
import { AppStyles } from './styles/AppStyles'

function App() {
  return (
    <AppStyles>
      <GlobalStyles />
      <Form />
    </AppStyles>
  );
}

export default App;
