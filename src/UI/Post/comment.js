import React, { Component } from "react";
import styled from "styled-components";
import UserBanner from "../UserBanner";
import iconPic from "../../assets/Luffy.jpg";

const CommentContainer = styled.div`
  margin: 10px;
`;

const CommentDiv = styled.div`
  margin-left: 15px;
  font-size: 11pt;
  border-left: 2px solid #38b2ac;
  padding: 5px;
`;

const CommentFooter = styled.div`
  margin-left: 5px;
  font-size: 10pt;
  color: blue;
  padding: 5px;
`;

class Comment extends Component {
  state = {
    points: 0,
  };

  render() {
    return (
      <CommentContainer>
        <UserBanner name={"Luffy"} profilePic={iconPic} comment={true} />
        <CommentDiv>
          <div>{this.props.comment}</div>
          <CommentFooter>Likes and Shit</CommentFooter>
        </CommentDiv>
      </CommentContainer>
    );
  }
}

export default Comment;
