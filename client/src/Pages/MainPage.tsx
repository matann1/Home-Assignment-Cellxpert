import { observer } from "mobx-react";
import React, { useContext, useState } from "react";
import { StoreContext } from "../Stores/DictionaryContext";
import styled from "@emotion/styled";
import BarChart from "../components/BarChart";
import DoughnutChart from "../components/DoughnutChart";
import Button from "../components/Button";

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

  const buttonsOptions = [
    {
      name: "Start With The Letter Above",
      title: "Click to dispaly how many words start with the letter above",
      color: `${ds.isToggleColorStart ? "click" : "clicked"}`,
      func: () => {
        ds.totalStart !== 0 ? ds.resetCountStart() : ds.wordsStart(inputLetter);
        ds.totalStart === 0
          ? ds.toggleColorStart(false)
          : ds.toggleColorStart(true);
      },
    },
    {
      name: "End With The Letter Above",
      title:
        "Click to dispaly how many times the letter above appears in total",
      color: `${ds.isToggleColorEnd ? "click" : "clicked"}`,
      func: () => {
        ds.totalEnd !== 0 ? ds.resetCountEnd() : ds.wordsEnd(inputLetter);
        ds.totalEnd === 0 ? ds.toggleColorEnd(false) : ds.toggleColorEnd(true);
      },
    },
    {
      name: "Appears In Total",
      title:
        "Click to dispaly how many times the letter above appears in total",
      color: `${ds.isToggleColorAppearsTotal ? "click" : "clicked"}`,
      func: () => {
        ds.totalAppears !== 0
          ? ds.resetCountAppearsTotal()
          : ds.wordsAppearsTotal(inputLetter);
        ds.totalAppears === 0
          ? ds.toggleColorAppearsTotal(false)
          : ds.toggleColorAppearsTotal(true);
      },
    },
    {
      name: "Repeates In Conjunctions",
      title:
        "Click to dispaly how many times the letter above repeates in conjunction",
      color: `${ds.isToggleColorConjunctions ? "click" : "clicked"}`,
      func: () => {
        ds.totalConjunctions !== 0
          ? ds.resetCountConjunctions()
          : ds.wordsConjunctions(inputLetter);
        ds.totalConjunctions === 0
          ? ds.toggleColorConjunctions(false)
          : ds.toggleColorConjunctions(true);
      },
    },
  ];

  const buttonsChart = [
    {
      name: "Bar Chart",
      color: `${ds.isToggleColorBarChart ? "click" : "clicked"}`,
      func: () => {
        ds.toggleColorBarChart(!ds.isToggleColorBarChart);
        ds.toggleBar(!ds.isToggleBar);
      },
    },
    {
      name: "Doughnuc Chart",
      color: `${ds.isToggleColorDoughnutChart ? "click" : "clicked"}`,
      func: () => {
        ds.toggleColorDoughnutChart(!ds.isToggleColorDoughnutChart);
        ds.toggleDoughnut(!ds.isToggleDoughnut);
      },
    },
  ];

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
          {buttonsOptions.map((btn, key) => (
            <Button
              key={key}
              name={btn.name}
              title={btn.title}
              color={btn.color}
              func={btn.func}
            />
          ))}
        </TopWrapper>

        <TopWrapper>
          Chart Option: <br />
          {buttonsChart.map((btn, key) => (
            <Button
              key={key}
              name={btn.name}
              color={btn.color}
              func={btn.func}
            />
          ))}
        </TopWrapper>

        {ds.isToggleBar && <BarChart />}
        {ds.isToggleDoughnut && <DoughnutChart />}
      </div>
    </>
  );
}

export default observer(MainPage);
