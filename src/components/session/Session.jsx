import React, { Component } from "react";
import { Link } from "react-router-dom";
import Peer from "simple-peer";

import CreateTaskForm from "../components/CreateTaskForm";

class Session extends Component {
  constructor(props) {
    super(props);
    // debugger;
    this.videoRef = React.createRef();
    this.videoRemoteRef = React.createRef();
    console.log("hello");
  }

  componentDidMount() {
    //   navigator.mediaDevices.getUserMedia({ video: true, audio: true }, gotMedia, function() {})
    const media = navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    });
    //   .then(stream => {
    //     console.log(this);
    //     this.videoRef.current.srcObject = stream;
    //   });

    // console.log(this.props);
    if (this.props.currentUser.role === "counselor") {
      media.then(stream => (this.videoRef.current.srcObject = stream));
    } else {
      //   debugger;
      media.then(stream => (this.videoRemoteRef.srcObject = stream));
    }

    // function gotMedia(stream) {
    //   const peer1 = new Peer({ initiator: true, stream: stream });
    //   const peer2 = new Peer();
    // }
    // peer1.on("signal", function(data) {
    //     peer2.signal(data);
    //   });
    // peer2.on("signal", function(data) {
    //     peer1.signal(data);
    // peer2.on("stream", function(stream) {
    //     // got remote video stream, now let's show it in a video tag
    //     this.videoRemoteRef.current.srcObject = stream;
  }

  render() {
    return (
      <React.Fragment>
        <div id="local">
          <video
            id="local-video"
            autoPlay={true}
            muted={true}
            ref={this.videoRef}
          />
        </div>
        <div id="remote">
          <video autoPlay={true} ref={this.videoRemoteRef} />
        </div>
        <Link to="/todolist">
          <h2 className="center">Create task(s) to complete for your next session</h2>
        </Link>
      </React.Fragment>
    );
  }
}

export default Session;
