import { Flash } from "Flash";

import "./App.css";

function App() {
  return (
    <>
      <Flash icon={"../../svg/error.svg"} variant="error" />
      <Flash icon={"../../svg/success.svg"} variant="success" />
      <Flash icon={"../../svg/warning.svg"} variant="warning" />
      <Flash icon={"../../svg/info.svg"} variant="info" />
    </>
  );
}

export default App;
