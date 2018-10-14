import React from "react";
import "./style.css";

import { Link } from "react-router-dom";
import { auth } from "../../API/auth";
import { AuthEnum } from "../../store/reducers/AuthEnum";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loginInput: "", passwordInput: "" };

    this.onLoginInputChange = this.onLoginInputChange.bind(this);
    this.onPasswordInputChange = this.onPasswordInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onLoginInputChange(event) {
    this.setState({
      loginInput: event.target.value
    });
  }

  onPasswordInputChange(event) {
    this.setState({
      passwordInput: event.target.value
    });
  }

  handleSubmit(event) {
    event.persist();
    auth({
      login: this.state.loginInput,
      password: this.state.passwordInput
    })
      .then(({ canLogin, user }) => {
        this.props.onLogin(AuthEnum.LOGIN);
        this.props.user(user);
      })
      .catch(({ canLogin }) => {
        this.props.onLogin(AuthEnum.CANT_LOGIN);
        event.preventDefault();
      });
  }

  render() {
    return (
      <div className="login-form">
        <h1>Войдите в систему, чтобы продолжить.</h1>
        <form action="#">
          <div>
            <label className="login-form__area">
              <span className="login-form__input-title">Логин:</span>
              <input
                className="login-form__input"
                type="text"
                placeholder="Логин"
                autoComplete="off"
                onChange={this.onLoginInputChange}
              />
            </label>
          </div>
          <div>
            <label className="login-form__area">
              <span className="login-form__input-title">Пароль:</span>
              <input
                className="login-form__input"
                type="password"
                placeholder="Пароль"
                autoComplete="off"
                onChange={this.onPasswordInputChange}
              />
            </label>
          </div>
          <div className="login-form__login">
            <button className="" onClick={this.handleSubmit}>
              Войти
            </button>
          </div>
        </form>
        {this.props.isLogin === AuthEnum.CANT_LOGIN ? (
          <span className="red">Неверный логин или пароль. Повторите ввод</span>
        ) : null}
      </div>
    );
  }
}

export default Login;
