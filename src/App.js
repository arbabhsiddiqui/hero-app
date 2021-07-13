import React from "react";

import Login from "./pages/login/login.components";

const App = () => {
  const user = 1;

  return user ? <Login /> : <div>dddwdwd</div>;
};

export default App;
