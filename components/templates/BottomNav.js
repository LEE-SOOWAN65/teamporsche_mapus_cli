import React from "react";
import styled from "styled-components";
import HomeIcon from "../atoms/Icon/Button/ButtomNaviHome.svg";
import MapIcon from "../atoms/Icon/Button/ButtomNaviMap.svg";
import FriendsIcon from "../atoms/Icon/Button/ButtomNaviFriends.svg";
import MyIcon from "../atoms/Icon/Button/ButtomNaviMy.svg";

export default function bottom(props) {
  return (
    <div style={{ ...styles, ...props.position }}>
      <NavIcon style={{ display: "flex", justifyContent: "center" }}>
        <Wrapper>
          <HomeIcon></HomeIcon>
          <Text>Home</Text>
        </Wrapper>
      </NavIcon>

      <NavIcon style={{ display: "flex", justifyContent: "center" }}>
        <Wrapper>
          <MapIcon></MapIcon>
          <Text>Map</Text>
        </Wrapper>
      </NavIcon>

      <NavIcon style={{ display: "flex", justifyContent: "center" }}>
        <Wrapper>
          <FriendsIcon></FriendsIcon>
          <Text>Friend</Text>
        </Wrapper>
      </NavIcon>

      <NavIcon style={{ display: "flex", justifyContent: "center" }}>
        <Wrapper>
          <MyIcon></MyIcon>
          <Text>My</Text>
        </Wrapper>
      </NavIcon>
    </div>
  );
}

const styles = {
  display: "flex",
  flexDirection: "row"
};

const Wrapper = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 10px;
  background-color: rgba(0, 0, 0, 0);
  border: none;
`;

const Text = styled.text`
  width: 1.2rem;
  height: 0.7rem;
  object-fit: contain;
  font-family: NanumSquareRound;
  font-size: 0.63rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.12;
  letter-spacing: normal;
  text-align: left;
  color: #aaaaaa;
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

const NavIcon = styled.button`
  height: 90px;
  width: 90px;
  display: flex;
  justify-contents: center;
  align-items: center;
  flex: 1;
  background-color: rgba(0, 0, 0, 0);
  border: none;
`;
