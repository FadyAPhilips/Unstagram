import React from "react";
import styled from "styled-components";

const ProfilePic = styled.div`
  display: flex;
  height: 100%;
`;

const Picture = styled.img`
  align-self: center;
  display: flex;
  border: 2px solid #38b2ac;
  border-radius: 10px;
  width: auto;
  max-height: 100%;
`;

const ProfileIcon = (props) => {
  return (
    <ProfilePic>
      <Picture src={props.profilePic} alt="oops" width="auto" />
    </ProfilePic>
  );
};

export default ProfileIcon;
