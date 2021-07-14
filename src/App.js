import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginPage from "./pages/login/loginpage.component";
import MainPage from "./pages/main/mainpage.component";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import { withRouter } from "react-router";
import DealerPage from "./pages/dealer/dealer.component";
// import "./index.css";

const App = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    }
  }, [userInfo]);

  return (
    <React.Fragment>
      <Route exact path="/" component={LoginPage} />

      {userInfo && <Header />}

      <Route exact path="/main" component={MainPage} />
      <Route exact path="/main/dealer" component={DealerPage} />
      {userInfo && <Footer />}
    </React.Fragment>
  );
};

export default withRouter(App);
