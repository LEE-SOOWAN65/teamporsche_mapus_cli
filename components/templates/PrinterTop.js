import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import Pin from "../atoms/Icon/Button/MapPin.svg";
import Stage from "../atoms/Icon/Button/MapStage.svg";
import School from "../atoms/Icon/Button/MapSchool.svg";

const Buildings = [
  "학관",
  "아산공학관",
  "ECC",
  "본관",
  "헬렌관",
  "생활관",
  "포스코관"
]; //건물명 배열

export default function PrinterTop() {
  const router = useRouter();

  return (
    <div>
      <Wrapper>
        <MainHeader>
          <ButtonWrapper />
          <TopBar>
            <Pin
              style={{
                padding: "5px"
              }}
            />
            <BuilingName>
              {Buildings[Number(router.query.building)]}
            </BuilingName>
          </TopBar>
          <Button>
            <ButtonSet>
              <Stage />
            </ButtonSet>
            <ButtonSet>
              <School />
            </ButtonSet>
          </Button>
        </MainHeader>
      </Wrapper>
    </div>
  );
}

const ButtonWrapper = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
`;

const ButtonSet = styled.button`
  padding-left: 5px;
  background-color: rgba(0, 0, 0, 0);
  border: none;
`;

const MainHeader = styled.header`
    display:flex;
    flex-direction:row;
    width:100%;
    align-items:center;
    justify-content:space-between
    margin-top:30px;
    padding: 0 20px;
    box-sizing:border-box;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: center;
  overflow: auto;
  position: "fixed";
`;
const Button = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-items: left;
  width: 20%;
`;

const BuilingName = styled.div`
  font-size:30px
  object-fit: contain;
`;
