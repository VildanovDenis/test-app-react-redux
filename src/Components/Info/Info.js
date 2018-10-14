import React from "react";
import "./style.css";

class Info extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div className="user-info">
        <h2>С возвращением, {user.login}!</h2>
        <span>
          <b>Имя пользователя</b>: {user.name} {user.surname}
        </span>
        <span>
          <b>Дата рождения</b>: {user.birthday}
        </span>
      </div>
    );
  }
}

export default Info;
