import React, { Component, Link } from "react";
import Profile from "./Profile.jsx";
import Signin from "./Signin.jsx";
import {
  isSignInPending,
  isUserSignedIn,
  redirectToSignIn,
  handlePendingSignIn,
  signUserOut
} from "blockstack";

import Session from "./session/Session.jsx";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: {
        role: "patient"
      }
    };
  }

  handleSignIn(e) {
    e.preventDefault();
    redirectToSignIn();
  }

  handleSignOut(e) {
    e.preventDefault();
    signUserOut(window.location.origin);
  }

  redirectHandler() {
    if (!isUserSignedIn()) {
      return <Signin handleSignIn={this.handleSignIn} />;
    } else {
      if (this.currentUser.role === "patient") {
        return <Profile handleSignOut={this.handleSignOut} />;
      } else {
        return <Session />;
      }
    }
  }

  render() {
    return (
      <div className="site-wrapper">
        <div className="site-wrapper-inner">{this.redirectHanlder()}</div>
      </div>
    );
  }

  componentWillMount() {
    if (isSignInPending()) {
      handlePendingSignIn().then(userData => {
        window.location = window.location.origin;
      });
    }
  }
}
