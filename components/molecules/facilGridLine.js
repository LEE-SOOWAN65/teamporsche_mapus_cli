import React from "react";
import styled from "styled-components";
import FacilButton from "./facil-button";
import Link from "next/link";

const FACILS = {
  인쇄기: "PRINTER",
  콘센트: "CONCENT",
  화장실: "TOILET",
  사물함: "LOCKER",
  현금인출기: "ATM",
  테이블: "TABLE"
};

export default function FacilGridLine(props) {
  return <Wrapper>{getFacilButtons(props.data, props.buildingNum)}</Wrapper>;
}

const getFacilButtons = (data, buildingNum) =>
  data.map((v, i) => (
    <Link
      key={i}
      href={`/facil-page?building=${buildingNum}&floor=1&facil=${
        FACILS[v.name]
      }`}
    >
      <a style={{ textDecoration: "none" }}>
        <FacilButton key={i} Icon={v.Icon} name={v.name} />
      </a>
    </Link>
  ));

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: space-between;
`;
