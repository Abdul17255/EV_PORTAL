import React from "react";

import { withRouter } from "react-router";
import { Switch, Route, Redirect } from "react-router-dom";

//import Loadable from "react-loadable";
import Dashboard from "../pages/dashboard-page";
import Login from "../../src/container/login/login.component";
//import MapDashboard from "../../src/container/map_dashboard";
//mport Mydashboard from "../my_dashboard";
import Track from "../container/track";

function Loading() {
  return <div className="sk-rotating-plane">Loading...</div>;
}

// const LandingPage = Loadable({
//   loader: () => import("../pages/landingpage"),
//   loading: Loading,
// });

// const Dashboard = Loadable({
// 	loader: () => import('pages/dashboard-page'),
// 	loading: Loading
// });

class Router extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.redirectToLanding();
  }

  redirectToLanding() {
    // var loggedInfo = sessionStorage.getItem('userInfo');
    // if (!loggedInfo && this.props.history.location.pathname === "/dashboard") {
    // 	window.location.href = "/";
    // }
  }

  render() {
    let isLoggedIn = true;
    // var loggedInfo = sessionStorage.getItem("userInfo");
    // if (loggedInfo) {
    //   isLoggedIn = true;
    // }

    return (
      <Switch>
        <Route exact path="/" component={Login} />
     
        <Route path="/login" component={Login} />
        <Route path="/dashboard">
          {sessionStorage.getItem("userName") ? <Dashboard /> : <Login />}
        </Route>

       
        {/* <Route path="/map-dashboard" component={MapDashboard} /> */}
        {/* <Route
          path="/dashboard"
          render={(props) =>
            isLoggedIn ? (
              <Dashboard {...props} />
            ) : (
              <Redirect
                to={{ pathname: "/", state: { from: props.location } }}
              />
            )
          }
        /> */}
      </Switch>
    );
  }
}

export default withRouter(Router);
