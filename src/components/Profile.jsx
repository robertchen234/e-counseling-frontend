import React, { Component } from "react";
import { isSignInPending, loadUserData, Person } from "blockstack";
import { Link } from "react-router-dom";
import { Menu, Segment } from "semantic-ui-react";

const avatarFallbackImage =
  "https://s3.amazonaws.com/onename/avatar-placeholder.png";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        name() {
          return "Anonymous";
        },
        avatarUrl() {
          return avatarFallbackImage;
        }
      },
      activeItem: "home"
    };
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state;
    const { handleSignOut } = this.props;
    const { person } = this.state;
    return !isSignInPending() ? (
      <Menu>
        <Link to="/">
          <Menu.Item
            name="Home"
            active={activeItem === "Home"}
            onClick={this.handleItemClick}
          />
        </Link>
        <Link to="/todolist">
          <Menu.Item
            name="To-Do List"
            active={activeItem === "To-Do List"}
            onClick={this.handleItemClick}
          />
        </Link>
        <Link to="/counselors">
          <Menu.Item
            name="Counselors"
            active={activeItem === "Counselors"}
            onClick={this.handleItemClick}
          />
        </Link>
        <Menu.Menu position="right">
          <Menu.Item
            name="Logout"
            active={activeItem === "Logout"}
            id="signout-button"
            onClick={handleSignOut.bind(this)}
          />
        </Menu.Menu>
      </Menu>
    ) : null;
  }

  componentWillMount() {
    this.setState({
      person: new Person(loadUserData().profile)
    });
  }
}
