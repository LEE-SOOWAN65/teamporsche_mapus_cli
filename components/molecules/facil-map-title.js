import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function FacilMapTitle(props) {
  const router = useRouter();
  return (
    <Wrapper>
      <FacilTitle>{props.title}</FacilTitle>
      <FacilDesc>
        <p>3개에요</p>
        <p>On the {router.query.floor} floor</p>
      </FacilDesc>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 90%;
  background-color: #fff;
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: fit-content;
`;

const FacilTitle = styled.p`
  font-family: NanumSquareRoundEB;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: #221f53;
  margin: 0;
`;

const FacilDesc = styled.div``;
