import React, { useState } from "react";
import ProfilePopUp from "../components/ProfilePopUp";

const Profile = () => {
  const [showProfilePopUP, setShowProfilePopUP] = useState(false);

  const handleShowProfilePopUP = () => {
    setShowProfilePopUP(!showProfilePopUP);
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleShowProfilePopUP}
        className="button-style">
        Edit Profile
      </button>
      <div className="absolute top-0 left-0 w-full">
        {showProfilePopUP && (
          <ProfilePopUp handleShowProfilePopUP={handleShowProfilePopUP} />
        )}
      </div>
    </div>
  );
};

export default Profile;
