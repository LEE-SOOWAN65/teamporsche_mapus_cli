import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import PrinterTop from "../components/templates/PrinterTop";
import FacilMap from "../components/organisms/facil-page/facil-map-container";
import BottomNav from "../components/templates/BottomNav";

const FACILS = {
  PRINTER: "프린터",
  CONCENT: "콘센트",
  TOILET: "화장실",
  LOCKER: "사물함",
  ATM: "현금인출기",
  TABLE: "책상"
};

export default function FacilPage() {
  const router = useRouter();

  return (
    <div
      className="App"
      style={{
        height: "100%",
        display: "flex",
        overflowY: "hidden",
        width: "100%"
      }}
    >
      <PrinterHeader>
        <Wrapper>
          <PrinterTop></PrinterTop>
          {router.query.facil}
        </Wrapper>
        <Background>
          <FacilMap FacilName={FACILS[router.query.facil]} />
        </Background>
        <Wrapper>
          <BottomNav
            position={{ position: "absolute", bottom: "0" }}
          ></BottomNav>
        </Wrapper>
      </PrinterHeader>
    </div>
  );
}

FacilPage.getInitialProps = () => {
  return {};
};

const Background = styled.header`
  width: 360px;
  height: 649px;
  object-fit: contain;
  background-color: #e6e6ec;
  height:80%
  width: 100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;

const Wrapper = styled.div`
  background-color: #ffffff;
`;

const PrinterHeader = styled.div`
  width: 100%;
`;
