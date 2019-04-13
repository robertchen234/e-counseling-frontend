import React from "react";

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
            </div>
          </div>
          
        </div>
      ) : null}
    </div>
  );
};
export default CounselorProfile;
