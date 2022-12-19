import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import loginApiActions from "../../redux/login/actions";
import Mydashboard from "../my_dashboard";
import Header from "../../container/header";
import classes from "./login.module.scss";
import ReactLoader from "../../component/react-loader/react-loader.component";
import Footer from "../footer/index";
import moment from "moment";
import ChargeSummary from "../charge_summary/index";

import Dashboard from "../../pages/dashboard-page";

const { getLoginAPI } = loginApiActions;

let username = " ";
let pwd = " ";
let refreshCounter = 0;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      userid: "",
      password: "",
      status: "",
      loginPageLoader: false,
      popup: false,
      parameters: "A",
      toggle: "",
    };
    this.signinCheckFunction = this.signinCheckFunction.bind(this);
  }

  componentDidMount() {
    var today = new Date();
    today.setDate(today.getDate());
    sessionStorage.setItem(
      "start_timestamp",
      moment(today).format("YYYY-MM-DD 00:00:00")
    );
    sessionStorage.setItem(
      "end_timestamp",
      moment(today).format("YYYY-MM-DD 23:59:59")
    );
    sessionStorage.setItem("duration", "CURRENT");
    const loginCredentials = JSON.parse(
      localStorage.getItem("loginCredentials")
    );
    let { inputRef, pwdRef } = this;
    if (loginCredentials) {
      if (loginCredentials.isChecked) {
        if (inputRef) {
          inputRef.value = loginCredentials.Username;
        }
        if (pwdRef) {
          pwdRef.value = loginCredentials.Password;
        }
      }
    }
    this.setState({ status: 200 });
    this.props.history.push("/login");
  }

  dummySignIn = () => {
    let { inputRef, pwdRef, remembermeClick } = this;
    username = inputRef.value;
    pwd = pwdRef.value;

    sessionStorage.setItem("userId", 1);
    sessionStorage.setItem("userName", username);

    this.setState({
      userid: sessionStorage.getItem("userId"),
      username: sessionStorage.getItem("userName"),
    });
  };

  signinCheckFunction = async () => {
    this.setState({
      loginPageLoader: true,
    });
    let { inputRef, pwdRef, remembermeClick } = this;
    username = inputRef.value;
    pwd = pwdRef.value;
    var remember = remembermeClick.value;

    let payLoad = {
      // dashboardID: DASHBOARD_ID,
      user_name: username,
      user_password: pwd,
      api_key: "LOGIN",
    };

    await this.props.getLoginAPI(payLoad);

    if (this.props.loginApi?.loginApi?.result?.data?.response_code == 204) {
      setTimeout(() => {
        // this.refreshPage();
      }, 2000);
    }
  };

  onKeyPress = (e) => {
    if (e.key === "Enter") {
      this.signinCheckFunction();
      //  this.dummySignIn();
    }
  };

  passEye = () => {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
      this.setState({
        toggle: true,
      });
    } else {
      x.type = "password";
      this.setState({
        toggle: false,
      });
    }
  };

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      if (
        nextProps?.loginApi?.loginApi?.result?.data?.response_code &&
        nextProps?.loginApi?.loginApi?.result?.data?.user_name != null
      ) {
        sessionStorage.setItem(
          "userId",
          nextProps?.loginApi?.loginApi?.result?.data?.user_id
        );
        sessionStorage.setItem(
          "userName",
          nextProps.loginApi.loginApi.result.data.user_name
        );
        sessionStorage.setItem(
          "roleName",
          nextProps.loginApi.loginApi.result.data.role_name
        );

        this.setState({
          status: nextProps?.loginApi?.loginApi?.result?.data?.response_code,
          username: nextProps.loginApi.loginApi.result.data.user_name,
          userid: nextProps?.loginApi?.loginApi?.result?.data?.user_id,
          // parameters: nextProps?.loginApi?.loginApi?.result?.data?.parameters,
        });
      } else {
        console.log("User Login Failed - URL not found");
      }
    }
    if (nextProps?.loginApi.loginApi.result?.data) {
      if (nextProps?.loginApi?.loginApi?.result?.data?.response_code == 204) {
        refreshCounter = 1;
        this.setState({
          popup: true,
          loginPageLoader: false,
        });
      }
    }
  }

  refreshPage = () => {
    if (refreshCounter == 1) {
      window.location.reload(false);
    }
  };

  render() {
    let { status, username, userid, password, parameters } = this.state;

    let userId = 0;
    if (username) {
      // sessionStorage.setItem("userId", 1);
      //  sessionStorage.setItem("userName", "admin");
      return <Dashboard />;
    } else {
      console.log("Error Check...");
      // this.props.history.push("/");
    }
    return (
      <div>
        <Header />
        <div className={classes.bg}></div>
        <div className={`${classes.loginWrapper} ${classes.topHeight}`}>
          {this.props.loginApi?.loginApi?.loading ? (
            <div className="landing-page--loader">
              <ReactLoader />
            </div>
          ) : null}
          <div className={classes.loginWrapperInputElement}>
            <div className="login-wrapper__input-elements__name">
              <label className={`${classes.form_header} ${classes.bold_font}`}>
                Sign In
              </label>
              <label className={classes.input_label}>User Name</label>
              <input
                onKeyPress={this.onKeyPress}
                ref={(el) => (this.inputRef = el)}
                className={classes.input_label_key}
              />
            </div>
            <div className="login-wrapper__input-elements__password">
              <label>Password</label>
              {/* <input
                onKeyPress={this.onKeyPress}
                ref={(el) => (this.pwdRef = el)}
                type="password"
                className={"fa fa-eye" + " " + classes.input_label_key}
              /> */}
              <input
                type="password"
                name="password"
                id="myInput"
                onKeyPress={this.onKeyPress}
                ref={(el) => (this.pwdRef = el)}
                className={classes.input_label_key}
              />
              <i
                id="togglePassword"
                className={
                  this.state.toggle === true
                    ? "fa fa-eye" + " " + classes.PasswordEye
                    : "fa fa-eye-slash" + " " + classes.PasswordEye
                }
                onClick={this.passEye}
              ></i>
            </div>
          </div>
          {this.state.popup ? (
            <div className={classes.WrongCredentials}>
              * Please enter valid login credentials
            </div>
          ) : null}
          <div className="login-wrapper__options">
            <label className="login-wrapper__options__remember bold_font ">
              <input
                type="checkbox"
                ref={(el) => (this.remembermeClick = el)}
                checked={this.checkedBox}
              />
              <span className={classes.bold_font}> Remember me</span>
              <span class="checkmark"></span>
            </label>
            <div className="login-wrapper__options__forgot-password">
              <p
                className="login-wrapper__options__forgot-password__content"
                //onClick={this.forgotPasswordClick}
              >
                {/* <ForgotPassword /> */}
              </p>
            </div>
          </div>
          <button
            className={(classes.submit_button_style, classes.button1)}
            onClick={this.signinCheckFunction}
            type="button"
          >
            SIGN IN
          </button>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
    login: state.login,
  };
};

export default connect(mapStateToProps, {
  getLoginAPI,
})(withRouter(Login));
