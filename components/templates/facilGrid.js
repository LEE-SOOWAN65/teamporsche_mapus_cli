import React from "react";
import styled from "styled-components";
import FacilGridLine from "../molecules/facilGridLine";
import ConcentIcon from "../atoms/Icon/Button/Concent";
import PrinterIcon from "../atoms/Icon/Button/Printer";
import BathroomIcon from "../atoms/Icon/Button/Bathroom";
import LockerIcon from "../atoms/Icon/Button/Locker";
import ATMIcon from "../atoms/Icon/Button/ATM";
import TableIcon from "../atoms/Icon/Button/Table";

const data = [
  [
    { Icon: PrinterIcon, name: "인쇄기" },
    { Icon: ConcentIcon, name: "콘센트" }
  ],
  [
    { Icon: BathroomIcon, name: "화장실" },
    { Icon: LockerIcon, name: "사물함" }
  ],
  [{ Icon: ATMIcon, name: "현금인출기" }, { Icon: TableIcon, name: "테이블" }]
];

export default function CenteredGrid(props) {
  return (
    <Wrapper>
      {data.map((v, i) => (
        <FacilGridLine key={i} data={v} buildingNum={props.buildingNum} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  marginbutoom: 30px;
  height: 70%;
`;
