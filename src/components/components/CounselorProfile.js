import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faVideo } from "@fortawesome/free-solid-svg-icons";

library.add(faVideo);

const CounselorProfile = props => {
  let currentId = parseInt(props.location.pathname.replace(/^\D+/g, ""));
  let currentCounselor = props.counselors.find(
    counselor => counselor.id === currentId
  );

  return (
    <div>
      {currentCounselor ? (
        <div>
          <div className="profile-container">
            <div className="profile-name-pic">
              <h1>{currentCounselor.name}</h1>
              <img
                className="profile-pic"
                src={currentCounselor.image}
                alt="counselor"
              />
            </div>
            <div className="profile-info">
              <p>{currentCounselor.bio}</p>
              <div className="status">
                <p>
                  {currentCounselor.name} is currently:{" "}
                  {currentCounselor.status}
                </p>
              </div>
              <Link to="/sessions">
                <div className="video-icon">
                  <span>
                    <FontAwesomeIcon icon={faVideo} size="2x" />
                  </span>
                  <p>Start a Session</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default CounselorProfile;
