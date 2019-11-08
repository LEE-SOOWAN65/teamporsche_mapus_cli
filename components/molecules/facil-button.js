import React from "react";
import styled from "styled-components";

export default function FacilButton(props) {
  const { Icon, name } = props;
  return (
    <Wrapper>
      <ButtonWrapper>
        <Icon />
      </ButtonWrapper>
      <Text>{name}</Text>
    </Wrapper>
  );
}

const Wrapper = styled.button`
  display: flex;
  width: 117px;
  height: 147px;
  flex-direction: column;
  background-color: white;
  justify-content: center;
  border-radius: 30px;
  align-items: center;
  margin: 10px;
`;
const Text = styled.text`
  width: 27px;
  height: 12px;
  object-fit: contain;
  width: 100px;
  height: 30px;
  justify-content: center;
  align-items: center;
  display: flex;
  text-decoration: none;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
