import React from "react";
import styled from "styled-components";
import ProfileIcon from "../profileIcon";

const HeaderContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  height: 50px;
`;

const NameContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  margin-left: 5px;
`;

const PostHeader = (props) => {
  return (
    <div>
      <HeaderContainer>
        <ProfileIcon profilePic={props.profilePic} />
        <NameContainer>{props.name}</NameContainer>
      </HeaderContainer>
    </div>
  );
};

export default PostHeader;
