import { observer } from "mobx-react";
import React from "react";
import styled from "@emotion/styled";

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

function Button({ name, title, color, func }: any) {
  return (
    <>
      <StyleButton title={title} color={color} onClick={() => func()}>
        {name}
      </StyleButton>
    </>
  );
}

export default observer(Button);
