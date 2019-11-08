import React from "react";
import styled from "styled-components";
import MapImage from "../templates/Map.png";

export default function PrinterTop() {
  return (
    <ImageBack>
      <MapImage />
    </ImageBack>
  );
}

const ImageBack = styled.div`
  display: flex;
  width: 341.1px;
  height: 491.3px;
  background-color: white;
  justify-content: center;
  border-radius: 30px;
`;
