import React, { Component } from "react";
import styled from "styled-components";
import PostPicture from "./PostPicture";

const PostContainer = styled.div`
  background-color: #5fe1d5;
  margin: 1%;
  margin-bottom: 10px;
  padding: 1%;
  border: 3px solid #38b2ac;
  border-radius: 15px;

  :hover {
    background-color: #65e7db;
    border: 3px solid #3eb8b3;
    /* filter: brightness(1.1); */
  }
`;

class Post extends Component {
  state = {
    hover: false,
  };

  toggleHover = () => {
    // this.setState({ hover: !this.state.hover });

    console.log("object");
  };
  render() {
    return (
      <PostContainer
      // onmouseover={() => this.toggleHover()}
      // onmouseout={() => this.toggleHover()}
      >
        <div>{this.props.name}</div>
        <PostPicture picture={this.props.picture} picID={this.props.picID} />
        <div>Likes And stuff</div>
        <div>Caption Here</div>
        <div>Comments</div>
      </PostContainer>
    );
  }
}

export default Post;
