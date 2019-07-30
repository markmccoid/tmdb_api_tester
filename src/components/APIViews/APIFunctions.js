// This component will search for any functions embedded
// in the return object and if found will display a button
// that will executed and display the results of the function call
import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "antd";
import ReactJson from "react-json-view";

const Header = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  background: rgb(6.4%, 44.5%, 6.4%);
  color: white;
  height: 30px;
  padding: 5px;
  text-align: left;
  border-bottom: 1px solid black;
`;
const FunctionButtons = styled.div`
  display: flex;
  flex-direction: row;
`;

const MyButton = styled(Button)`
  margin: 0 10px 10px 10px;
`;
const findFunctions = data => {
  let foundFunctions = [];
  Object.keys(data).forEach(objKey => {
    if (typeof data[objKey] === "function") {
      foundFunctions.push({ name: objKey, func: data[objKey] });
    }
  });
  return foundFunctions;
};
const APIFunctions = ({ results }) => {
  let [funcResults, setFuncResults] = useState(null);
  // Display Null if no results
  if (!results) return null;

  let embeddedFunctions = findFunctions(results.data);

  // Object.keys(results.data).map(objKey => {
  //   if (typeof results.data[objKey] === "function") {
  //     console.log("function key", objKey);
  //     embeddedFunctions.push({ name: objKey, func: results.data[objKey] });
  //   }
  // });
  const runEmbeddedFunction = async (func, name) => {
    let funcResult = await func();
    setFuncResults({ name, funcResult });
    console.log("funcResult", funcResult);
  };
  return (
    <React.Fragment>
      <FunctionButtons>
        {embeddedFunctions && (
          <MyButton onClick={() => setFuncResults(null)}>Clear</MyButton>
        )}
        {embeddedFunctions &&
          embeddedFunctions.map(emFunc => (
            <MyButton
              type="primary"
              key={emFunc.name}
              onClick={() => runEmbeddedFunction(emFunc.func, emFunc.name)}
            >
              {emFunc.name}
            </MyButton>
          ))}
      </FunctionButtons>
      {funcResults && (
        <div style={{ textAlign: "left", marginBottom: "10px" }}>
          <Header>{funcResults.name}</Header>
          <ReactJson
            src={funcResults.funcResult}
            style={{ paddingTop: "10px" }}
            theme="monokai"
            collapseStringsAfterLength={50}
            indentWidth={2}
          />
        </div>
      )}
    </React.Fragment>
  );
};

export default APIFunctions;
