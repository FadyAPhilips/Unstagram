import React, { Component } from "react";
import styled from "styled-components";
import UserBanner from "../UserBanner";
import PostPicture from "./PostPicture";
import Comments from "./comment";

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

const Caption = styled.div`
  padding: 10px;
`;

const subcomments = [
  {
    name: "Naruto",
    pic: "pic1",
    comment: "Believe it!!",
  },
];

class Post extends Component {
  getChildComments = (comments) => {
    console.log("function");
    const coms = comments.map((e, i) => {
      console.log(e);
      return <Comments comment={e.comment} key={i} />;
    });
    return coms;
  };

  render() {
    return (
      <PostContainer>
        <UserBanner name={this.props.name} profilePic={this.props.profilePic} />
        <PostPicture picture={this.props.picture} picID={this.props.picID} />
        <Caption>{this.props.caption}</Caption>
        <div style={{ color: "blue" }}>Likes And stuff</div>
        <Comments
          comment={
            "CSS Filters are a powerful tool that authors can use to achieve varying visual effects (sort of like Photoshop filters for the browser). The CSS filter property provides access to effects like blur or color shifting on an element’s rendering before the element is displayed. Filters are commonly used to adjust the rendering of an image, a background, or a border."
          }
        />
      </PostContainer>
    );
  }
}

export default Post;
