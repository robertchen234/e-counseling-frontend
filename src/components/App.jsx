import React, { Component, Link } from "react";
import Profile from "./Profile.jsx";
import Signin from "./Signin.jsx";
import {
  isSignInPending,
  isUserSignedIn,
  redirectToSignIn,
  handlePendingSignIn,
  signUserOut,
  loadUserData,
  Person
} from "blockstack";
import { Route, Switch, withRouter } from "react-router-dom";
import CounselorContainer from "./containers/CounselorContainer";

export default class App extends Component {
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
      users: [],
      currentUser: {},
      personName: "",
      personAvatar: "",
      created: false,
      counselors: []
    };
  }

  handleSignIn(e) {
    e.preventDefault();
    const origin = window.location.origin;
    redirectToSignIn(origin, origin + "/manifest.json", [
      "store_write",
      "publish_data"
    ]);
  }

  handleSignOut(e) {
    e.preventDefault();
    signUserOut(window.location.origin);
  }

  getUsers() {
    fetch("http://localhost:3000/api/v1/users")
      .then(resp => resp.json())
      .then(users => {
        this.setState({ users });

        const currentUser = users.find(user => {
          return user.name.toString() === this.state.person.name().toString();
        });

        if (currentUser) {
          this.setState({
            currentUser
          });
        } else if (this.state.person.name().toString() !== "Anonymous") {
          this.createNewUser();
        }
      });
  }

  // if user exists in our users array, then find that user and send that object to App's state as currentUser
  // else create new user object and tell our Rails backend about it, then send that object to App's state as currentUser

  createNewUser() {
    console.log("creating new user");
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        name: this.state.person.name(),
        bio: null,
        role: "patient",
        image: "https://s3.amazonaws.com/onename/avatar-placeholder.png",
        status: "online"
      })
    })
      .then(res => res.json())
      .then(user => {
        this.setState({
          currentUser: user
        });
      });
  }

  render() {
    console.log(this.state.currentUser);
    return (
      <div className="site-wrapper">
        <div className="site-wrapper-inner">
          {!isUserSignedIn() ? (
            <Signin handleSignIn={this.handleSignIn} />
          ) : (
            <Profile handleSignOut={this.handleSignOut} getUsers={this.getUsers}/>
          )}
          <div>
            <Switch>
              <Route
                path="/counselorprofile/:id"
                render={() => (
                  <CounselorProfile counselors={this.state.counselors} />
                )}
              />

              <Route
                path="/counselors"
                render={() => (
                  <CounselorContainer counselors={this.state.counselors} />
                )}
              />

              <Route
                path="/"
                render={() => (
                  <CounselorContainer counselors={this.state.counselors} />
                )}
              />
            </Switch>
          </div>

        </div>
      </div>
    );
  }

  componentWillMount() {
    if (isSignInPending()) {
      handlePendingSignIn().then(userData => {
        window.location = window.location.origin;
      });
    }

    if (isUserSignedIn()) {
      this.setState({
        person: new Person(loadUserData().profile)
      });
    }
  }
  componentDidMount() {
    this.getUsers();
  }
}
export default withRouter(App);
