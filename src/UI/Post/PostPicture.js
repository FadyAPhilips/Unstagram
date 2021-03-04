import React, { Component } from "react";
import styled from "styled-components";

const Picture = styled.img`
  align-self: center;
  display: flex;
  border-radius: 10px;
  max-width: 100%;
  max-height: 600px;
  border: 2px solid #38b2ac;
`;

const ContainerDiv = styled.div`
  width: 100%;
`;

class PostPicture extends Component {
  render() {
    return (
      <ContainerDiv>
        <Picture
          src={this.props.picture}
          alt="oops"
          width="auto"
          id={this.props.picID}
        />
      </ContainerDiv>
    );
  }
}

export default PostPicture;
