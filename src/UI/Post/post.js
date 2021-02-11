import React, { Component } from "react";
import styled from "styled-components";
import PostPicture from "./PostPicture";
import PostHeader from "./PostHeader";

const PostContainer = styled.div`
  background-color: #81e6d9;
  margin: 1%;
  margin-bottom: 20px;
  padding: 1%;
  border: 3px solid #38b2ac;
  border-radius: 15px;

  :hover {
    background-color: #87ecdf;
    border: 3px solid #3eb8b3;
  }
`;

class Post extends Component {
  render() {
    return (
      <PostContainer>
        <PostHeader name={this.props.name} profilePic={this.props.profilePic} />
        <PostPicture picture={this.props.picture} picID={this.props.picID} />
        <div>Likes And stuff</div>
        <div>Caption Here</div>
        <div>Comments</div>
      </PostContainer>
    );
  }
}

export default Post;
