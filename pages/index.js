import React, { useState } from "react";
import MainBuildingDialog from "../components/templates/MainBuildingDialog";
import styled from "styled-components";
import FacilGrid from "../components/templates/facilGrid";
import BottomNav from "../components/templates/BottomNav";

function App() {
  const [buildingNum, setBuildingNum] = useState(1);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        overflowY: "hidden",
        width: "100%",
        height: "100%"
      }}
    >
      <Wrapper>
        <MainBuildingDialog
          buildingNum={buildingNum}
          setBuildingNum={setBuildingNum}
        />
        <Background />
        <FacilGrid buildingNum={buildingNum} />

        <BottomNav position={{ position: "absolute", bottom: "0" }}></BottomNav>
      </Wrapper>
    </div>
  );
}
const Background = styled.header`
  text-align: center;
`;

const Wrapper = styled.div`
  background: linear-gradient(#f2905d, #cc4b5d, #221f53);
  width: 100%;
`;

export default App;
