import { observer } from "mobx-react";
import React, { useContext, useState } from "react";
import { StoreContext } from "../Stores/DictionaryContext";
import styled from "@emotion/styled";
import BarChart from "../components/BarChart";
import DoughnutChart from "../components/DoughnutChart";

const StyleButton: any = styled.button`
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
  font-weight: bold;
  box-shadow: 1px 3px 8px 0px rgba(0, 0, 0, 0.3);
  font-size: 25px;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 2%;
  &:hover {
    box-shadow: 3px 3px 8px 0px rgba(0, 0, 0, 2);
  }
`;

const Select: any = styled.select`
  border-radius: 9px;
  font-size: 20px;
  margin: 1%;
  padding: 5px;
  box-shadow: 1px 3px 10px 0px rgba(0, 0, 0, 0.3);
`;

function MainPage() {
  const { dictionaryStore: ds } = useContext(StoreContext);
  const [inputLetter, setInputLetter] = useState<string>("");

  const onOptionChangeHandler = (e: any) => {
    setInputLetter(e.target.value);
    ds.resetAll();
  };

  return (
    <>
      <div>
        <TopWrapper>
          <Select onChange={onOptionChangeHandler}>
            <option value={""}>Please choose a letter</option>
            {ds.options.map((option, index) => {
              return <option key={index}>{option}</option>;
            })}
          </Select>
          <h5 style={{ margin: 5 }}>(Choose one option or more)</h5>
          How many words... <br />
          <StyleButton
            type="button"
            title="Click to dispaly how many words start with the letter above"
            color={ds.isToggleColorStart ? "click" : "clicked"}
            onClick={() => {
              ds.totalStart !== 0
                ? ds.resetCountStart()
                : ds.wordsStart(inputLetter);
              ds.totalStart === 0
                ? ds.toggleColorStart(false)
                : ds.toggleColorStart(true);
            }}
          >
            Start With The Letter Above
          </StyleButton>
          <StyleButton
            type="button"
            title="Click to dispaly how many words end with the letter above"
            color={ds.isToggleColorEnd ? "click" : "clicked"}
            onClick={() => {
              ds.totalEnd !== 0 ? ds.resetCountEnd() : ds.wordsEnd(inputLetter);
              ds.totalEnd === 0
                ? ds.toggleColorEnd(false)
                : ds.toggleColorEnd(true);
            }}
          >
            End With The Letter Above
          </StyleButton>
          <br /> How many times the letter above... <br />
          <StyleButton
            type="button"
            title="Click to dispaly how many times the letter above appears in total"
            color={ds.isToggleColorAppearsTotal ? "click" : "clicked"}
            onClick={() => {
              ds.totalAppears !== 0
                ? ds.resetCountAppearsTotal()
                : ds.wordsAppearsTotal(inputLetter);
              ds.totalAppears === 0
                ? ds.toggleColorAppearsTotal(false)
                : ds.toggleColorAppearsTotal(true);
            }}
          >
            Appears In Total <br />
          </StyleButton>
          <StyleButton
            type="button"
            title="Click to dispaly how many times the letter above repeates in conjunction"
            color={ds.isToggleColorConjunctions ? "click" : "clicked"}
            onClick={() => {
              ds.totalConjunctions !== 0
                ? ds.resetCountConjunctions()
                : ds.wordsConjunctions(inputLetter);
              ds.totalConjunctions === 0
                ? ds.toggleColorConjunctions(false)
                : ds.toggleColorConjunctions(true);
            }}
          >
            Repeates In Conjunctions
          </StyleButton>
        </TopWrapper>

        <TopWrapper>
          {" "}
          Chart Option: <br />
          <StyleButton
            color={ds.isToggleColorBarChart ? "click" : "clicked"}
            onClick={() => {
              ds.toggleColorBarChart(!ds.isToggleColorBarChart);
              ds.toggleBar(!ds.isToggleBar);
            }}
          >
            Bar Chart
          </StyleButton>
          <StyleButton
            color={ds.isToggleColorDoughnutChart ? "click" : "clicked"}
            onClick={() => {
              ds.toggleColorDoughnutChart(!ds.isToggleColorDoughnutChart);
              ds.toggleDoughnut(!ds.isToggleDoughnut);
            }}
          >
            Doughnuc Chart
          </StyleButton>
        </TopWrapper>

        {ds.isToggleBar && <BarChart />}
        {ds.isToggleDoughnut && <DoughnutChart />}
      </div>
    </>
  );
}

export default observer(MainPage);
