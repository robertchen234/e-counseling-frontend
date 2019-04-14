import React, { Component } from "react";
// import { withRouter } from "react-router-dom";
import Peer from "simple-peer";

class Session extends Component {
  constructor(props) {
    super(props);
    // debugger;
    this.videoRef = React.createRef();
    this.videoRemoteRef = React.createRef();
    console.log("hello");
  }

  componentDidMount() {
    // const media = navigator.mediaDevices.getUserMedia({
    //   video: true,
    //   audio: true
    // });

    const peer1 = new Peer();
    const peer2 = new Peer();

    peer1.on("signal", data => peer2.signal(data));
    peer2.on("signal", data => peer1.signal(data));

    if (this.props.currentUser.role === "counselor") {
      navigator.mediaDevices
        .getUserMedia({
          video: true,
          audio: true
        })
        .then(stream => {
          this.videoRef.current.srcObject = stream;
          peer1.addStream(stream);
          peer2.on(
            "track",
            (track, stream) => (this.videoRef.current.srcObject = stream)
          );
        });
    } else {
      //   debugger;
      navigator.mediaDevices
        .getUserMedia({
          video: true,
          audio: true
        })
        .then(stream => {
          this.videoRemoteRef.current.srcObject = stream;
          peer2.addStream(stream);
        });
    }

    peer1.on("stream", stream => (this.videoRef.current.srcObject = stream));
    peer2.on(
      "stream",
      stream => (this.videoRemoteRef.current.srcObject = stream)
    );

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
      </React.Fragment>
    );
  }
}

export default Session;
