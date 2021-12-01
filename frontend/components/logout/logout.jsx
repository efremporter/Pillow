import React from "react";

class LogoutButton extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (!this.props.sessionId) return null;
    return (
      <div>
        <button onClick={() => this.props.logout()}>Logout</button>
      </div>
    )
  }
}

export default LogoutButton;