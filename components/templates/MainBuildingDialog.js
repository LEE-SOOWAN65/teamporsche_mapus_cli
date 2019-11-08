import React from "react";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import PinIcon from "../atoms/Icon/MainPin";
import Setting from "../atoms/Icon/Button/Main_Setting";
import SearchPin from "../atoms/Icon/SearchPin";

//메인화면 건물 선택시 위에 건물명 뜨는 네이게이션바

const Buildings = [
  "학관",
  "아산공학관",
  "ECC",
  "본관",
  "헬렌관",
  "생활관",
  "포스코관"
]; //건물명 배열

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = value => {
    props.onChange(value);
    onClose(value);
  };

  return (
    <>
      <Dialog
        onClose={handleClose}
        aria-labelledby="건물명을 선택하세요"
        open={open}
      >
        (
        <List>
          {Buildings.map((Building, index) => (
            <ListItem
              button
              onClick={() => handleListItemClick(index)}
              key={Building}
            >
              <ListItemText primary={Building} />
            </ListItem>
          ))}
        </List>
      </Dialog>
    </>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired
};

export default function SimpleDialogDemo(props) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(Buildings[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = value => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Wrapper>
        <MainHeader>
          <ButtonWrapper />

          <TopBar>
            <PinIcon />
            <BuildingName>
              <Typography variant="subtitle1">
                <TextBuilding>{Buildings[props.buildingNum]}</TextBuilding>
              </Typography>
            </BuildingName>
          </TopBar>

          <Button>
            <Setting />
          </Button>
        </MainHeader>
      </Wrapper>
      <br />
      <SelectButtonContainer>
        <SelectButton onClick={handleClickOpen}>
          <Text>건물명을 선택하세요</Text>
          <PutButton>
            <SearchPin />
          </PutButton>
        </SelectButton>
      </SelectButtonContainer>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        onChange={props.setBuildingNum}
      />
    </div>
  );
}

const TextBuilding = styled.text`
  width: 60px;
  height: 17px;
  object-fit: contain;
  font-family: NanumSquareRoundEB;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 5.36;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
`;
const PutButton = styled.div``;

const ButtonWrapper = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainHeader = styled.header`
    display:flex;
    flex-direction:row;
    width:100%;
    align-items:center;
    justify-content:space-between
    backgroundColor: transparent
    margin-top:30px;
    padding: 0 20px;
    box-sizing:border-box;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  overflow: auto;
  position: "fixed";
`;
const SelectButtonContainer = styled.div`
margin: 0 auto;
border-radius: 20px;
width:264.9px;
height:20.2px
border: 1px solid white; 
background-color: rgba(0,0,0,0); 
color: white; 
padding: 5px;
display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
`;

const SelectButton = styled.button`
  border: 0px;
  background-color: rgba(0, 0, 0, 0);
  color: white;
  padding: 5px;
  display: flex;
  justify-items: center;
  align-items: center;
`;

const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
`;

const BuildingName = styled.div`
  font-size: 30px;
`;
