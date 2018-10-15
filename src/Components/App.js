import React from "react";
import Login from "./Login/Login";
import Info from "./Info/Info";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { authAction } from "../store/actions/auth-action";
import { authUserAction } from "../store/actions/auth-user-action";
import { logoutAction } from "../store/actions/logout-action";
import { AuthEnum } from "../store/reducers/AuthEnum";

// Не забывать чистить localStorage!!!

class App extends React.Component {
  render() {
    const { isLogin } = this.props;
    return (
      <React.Fragment>
        {/* <Switch> */}
        {isLogin === AuthEnum.LOGIN ? (
          <Redirect from="/*" to="/Info" />
        ) : (
          <Route
            exact
            path="/"
            render={props => (
              <Login
                {...props}
                onLogin={this.props.auth}
                isLogin={this.props.isLogin}
                user={this.props.user}
              />
            )}
          />
        )}
        <Route
          path="/Info"
          render={props => (
            <Info
              {...props}
              user={this.props.userInfo}
              isLogin={this.props.isLogin}
              onLogout={this.props.logout}
            />
          )}
        />
        {/*  */}
        {/* </Switch> */}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogin: state.authReducer.isAuth,
    userInfo: state.authReducer.user
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      auth: authAction,
      user: authUserAction,
      logout: logoutAction
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
