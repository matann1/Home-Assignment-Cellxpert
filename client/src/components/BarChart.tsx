import React, { useContext } from "react";
import { StoreContext } from "../Stores/DictionaryContext";

import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import styled from "@emotion/styled";
import { observer } from "mobx-react";
Chart.register(...registerables);

const Card: any = styled.div`
  transition: box-shadow 400ms;
  box-shadow: 1px 3px 8px 0px rgba(0, 0, 0, 0.5);
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 2%;
  border-radius: 15px;
  &:hover {
    box-shadow: 3px 3px 8px 0px rgba(0, 0, 0, 2);
  }
`;

const options: any | undefined = {
  scales: {
    x: {
      ticks: {
        font: {
          size: 15,
        },
      },
    },
    y: {
      ticks: {
        font: {
          size: 15,
        },
      },
    },
  },
};

const ChartWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

function BarChart() {
  const { dictionaryStore } = useContext(StoreContext);

  const data = {
    labels: ["Start With", "End With", "Appears In Total", "Conjunctions"],
    datasets: [
      {
        label: "Hide",
        data: [
          dictionaryStore.countStart,
          dictionaryStore.countEnd,
          dictionaryStore.countAppearsTotal,
          dictionaryStore.countConjunctions,
        ],
        backgroundColor: ["#F8EDE3", "#DFD3C3", "#D0B8A8", "#7D6E83"],
        borderColor: [
          "rgba(0, 0, 0, 1)",
          "rgba(0, 0, 0, 1)",
          "rgba(0, 0, 0, 1)",
          "rgba(0, 0, 0, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };

  return (
    <Card>
      <ChartWrapper>
        <Bar data={data} options={options} />
      </ChartWrapper>
    </Card>
  );
}

export default observer(BarChart);
