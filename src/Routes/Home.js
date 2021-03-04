import React, { Component } from "react";
import styled from "styled-components";
import BackendSim from "../BackendSim/BackendSim";
import Navbar from "../UI/NavBar/NavBar";
import Post from "../UI/Post/post";

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  background-color: #4fd1c5;
  margin: 10px;
  padding: 10px;
  border: 3px solid #38b2ac;
  border-radius: 15px;
`;

class Home extends Component {
  postPicCount = 0;

  createPostList = () => {
    const postList = BackendSim.getPostList().map((post) => {
      return (
        <Post
          name={post.name}
          profilePic={post.profilePic}
          picture={post.picture}
          caption={post.caption}
          picID={"picture" + this.postPicCount}
        />
      );
    });
    this.postPicCount++;
    return postList;
  };

  render() {
    return (
      <div>
        <Navbar />
        <Container>
          <PostsContainer>{this.createPostList()}</PostsContainer>
        </Container>
      </div>
    );
  }
}

export default Home;
