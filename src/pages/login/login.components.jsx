import React, { useState, useEffect } from "react";
import "./login.styles.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/user/user.actions";
import Message from "../../components/message/message.component";
import Loader from "../../components/loader/loader.component";

const LoginPage = ({ location, history }) => {
  const [username, setUsername] = useState("bilal");
  const [password, setPassword] = useState("1234");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);

  const { loading, error, userInfo } = userLogin;

  // const redirect = location.search ? location.search.split("=")[1] : "/";
  const redirect = "http://localhost:3000/main";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const handleSubmitChange = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };

  return (
    <div className="login-page">
      <div className="circle1"></div>

      <div className="glassContainer ptb-50">
        {error && <Message variant="danger">{error.hero.msg}</Message>}
        <h3 className="">Login</h3>
        {loading ? (
          <Loader />
        ) : (
          <form onSubmit={handleSubmitChange}>
            <div className="form-group">
              <input
                type="text"
                name="username"
                className="form-control form-control-lg  is-invalid"
                placeholder="Enter Your Username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <span className="invalid-feedback"></span>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="form-control form-control-lg  "
                placeholder="Enter Your Password"
                value={password}
              />
              <span className="invalid-feedback"></span>
            </div>
            {loading ? (
              <p>requesting</p>
            ) : (
              <input type="submit" value="login" className="btn " />
            )}
          </form>
        )}
      </div>

      <div className="circle2"></div>
    </div>
  );
};

export default LoginPage;
