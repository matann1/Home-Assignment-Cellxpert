import { observer } from "mobx-react";
import React, { useContext, useState } from "react";
import { StoreContext } from "./Stores/DictionaryContext";
import styled from "@emotion/styled";
import BarChart from "./components/BarChart";
import DoughnutChart from "./components/DoughnutChart";

const StyleButton = styled.button`
  background: linear-gradient(
    45deg,
    ${(props) => (props.color === "click" ? "#F8EDE3 10%" : "#D0B8A8 30%")},
    ${(props) => (props.color === "click" ? "#F8EDE3 90%" : "#AF7AB3 70%")}
  );
  border-radius: 15px;
  font-size: 20px;
  border: 0;
  margin: 10px;
  color: black;
  height: 48px;
  padding: 0 30px;
  font-weight: bold;
  box-shadow: 0 3px 5px 2px rgba(207, 185, 151, 0.3);
`;

const TopWrapper: any = styled.div`
  transition: box-shadow 400ms;
  font-family: "Josefin Sans", sans-serif;
  font-padding: 2%;
  font-weight: bold;
  box-shadow: 1px 3px 8px 0px rgba(0, 0, 0, 0.3);
  font-size: 25px;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 2%;
  border-radius: 15px;
  background-color: #fff5e4;
`;

const Select = styled.select`
  border: 5 solid grey;
  border-radius: 9px;
  font-size: 20px;
  margin: 1%;
  padding: 5px;
  box-shadow: 1px 3px 10px 0px rgba(0, 0, 0, 0.3);
`;

function MainPage() {
  const { dictionaryStore } = useContext(StoreContext);
  const [toggleBar, setToggleBar] = useState<boolean>(false);
  const [toggleDoughnut, setToggleDoughnut] = useState<boolean>(false);
  const [toggleColorStart, setToggleColorStart] = useState<boolean>(false);
  const [toggleColorEnd, setToggleColorEnd] = useState<boolean>(false);
  const [toggleColorAppearsTotal, setToggleColorAppearsTotal] =
    useState<boolean>(false);
  const [toggleColorConjunctions, setToggleColorConjunctions] =
    useState<boolean>(false);
  const [toogleColorBarChart, setToogleColorBarChart] =
    useState<boolean>(false);
  const [toogleColorDoughnutChart, setToogleColorDoughnutChart] =
    useState<boolean>(false);
  const [inputLetter, setInputLetter] = useState<string>("");
  const options = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const onOptionChangeHandler = (e: any) => {
    setInputLetter(e.target.value);
    dictionaryStore.resetAll();
    setToggleColorStart(false);
    setToggleColorEnd(false);
    setToggleColorAppearsTotal(false);
    setToggleColorConjunctions(false);
    setToogleColorBarChart(false);
    setToggleBar(false);
    setToogleColorDoughnutChart(false);
    setToggleDoughnut(false);
  };

  return (
    <>
      <div>
        <TopWrapper>
          <Select onChange={onOptionChangeHandler}>
            <option value={""}>Please choose a letter</option>
            {options.map((option, index) => {
              return <option key={index}>{option}</option>;
            })}
          </Select>
          <h5 style={{ margin: 5 }}>(Choose one option or more)</h5>
          How many words... <br />
          <StyleButton
            type="button"
            title="Click to dispaly how many words start with the letter above"
            color={toggleColorStart ? "click" : "clicked"}
            onClick={() => {
              dictionaryStore.countStart !== 0
                ? dictionaryStore.resetCountStart()
                : dictionaryStore.wordsStart(inputLetter);
              dictionaryStore.countStart === 0
                ? setToggleColorStart(false)
                : setToggleColorStart(true);
            }}
          >
            Start With The Letter Above
          </StyleButton>
          <StyleButton
            type="button"
            title="Click to dispaly how many words end with the letter above"
            color={toggleColorEnd ? "click" : "clicked"}
            onClick={() => {
              dictionaryStore.countEnd !== 0
                ? dictionaryStore.resetCountEnd()
                : dictionaryStore.wordsEnd(inputLetter);
              dictionaryStore.countEnd === 0
                ? setToggleColorEnd(false)
                : setToggleColorEnd(true);
            }}
          >
            End With The Letter Above
          </StyleButton>
          <br /> How many times the letter above... <br />
          <StyleButton
            type="button"
            title="Click to dispaly how many times the letter above appears in total"
            color={toggleColorAppearsTotal ? "click" : "clicked"}
            onClick={() => {
              dictionaryStore.countAppearsTotal !== 0
                ? dictionaryStore.resetCountAppearsTotal()
                : dictionaryStore.wordsAppearsTotal(inputLetter);
              dictionaryStore.countAppearsTotal === 0
                ? setToggleColorAppearsTotal(false)
                : setToggleColorAppearsTotal(true);
            }}
          >
            Appears In Total <br />
          </StyleButton>
          <StyleButton
            type="button"
            title="Click to dispaly how many times the letter above repeates in conjunction"
            color={toggleColorConjunctions ? "click" : "clicked"}
            onClick={() => {
              dictionaryStore.countConjunctions !== 0
                ? dictionaryStore.resetCountConjunctions()
                : dictionaryStore.wordsConjunctions(inputLetter);
              dictionaryStore.countConjunctions === 0
                ? setToggleColorConjunctions(false)
                : setToggleColorConjunctions(true);
            }}
          >
            Repeates In Conjunctions
          </StyleButton>
        </TopWrapper>

        <TopWrapper>
          {" "}
          Chart Option: <br />
          <StyleButton
            color={toogleColorBarChart ? "click" : "clicked"}
            onClick={() => {
              setToogleColorBarChart(!toogleColorBarChart);
              setToggleBar(!toggleBar);
            }}
          >
            Bar Chart
          </StyleButton>
          <StyleButton
            color={toogleColorDoughnutChart ? "click" : "clicked"}
            onClick={() => {
              setToogleColorDoughnutChart(!toogleColorDoughnutChart);
              setToggleDoughnut(!toggleDoughnut);
            }}
          >
            Doughnuc Chart
          </StyleButton>
        </TopWrapper>

        {toggleBar && <BarChart />}
        {toggleDoughnut && <DoughnutChart />}
      </div>
    </>
  );
}

export default observer(MainPage);
