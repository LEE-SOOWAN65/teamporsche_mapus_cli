import React from "react";
import styled from "styled-components";
import FacilMapTitle from "../../molecules/facil-map-title";
import FacilMap from "../../molecules/facil-map";

export default function FacilMapContainer(props) {
  return (
    <Wrapper>
      <FacilMapTitle title={props.FacilName} />
      <FacilMap />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 90%;
  background-color: #fff;
  border-radius: 30px;
`;
