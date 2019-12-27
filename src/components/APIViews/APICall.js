import React, { useState, useEffect, Suspense } from "react";
//import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs"
import styled from "styled-components";
import { Button } from "antd";
//import APIResults from './APIResults';
import APIFunctions from "./APIFunctions";
import APIResults from "./APIResults";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  height: 35px;
  border-bottom: 1px solid gray;
  background: rgb(81.2%, 92.1%, 81.2%);
  font-size: 1.3rem;
  text-align: left;
  padding: 5px 0 0 25px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 10px 0 0 10px;
`;

const Label = styled.div`
  text-align: left;
  margin-left: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  margin: 5px;
  height: 25px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px;
`;
// const Button = styled.button`
//   vertical-align: middle;
//   margin: 15px;
//   height: 25px;
//   width: 100px;
// `;

let getInitialState = parms => {
  let parmsState = [];
  parms.forEach(parm => {
    parmsState.push({
      value: ""
    });
  });
  return parmsState;
};

const APICall = ({ location, apiCallFunction, parms }) => {
  // Result of API call
  let [results, setResults] = useState(null);
  // Input field for API Call
  let [fields, setFields] = useState();

  useEffect(() => {
    // Set the intitial state to an array of objects with one object for each
    // argument.  Need this so that setFields call will have something to set.
    setFields(getInitialState(parms));
    setResults(null);
  }, [parms]);

  // update the proper argument entry with what the input field that was updated
  function handleChange(idx, event) {
    const values = [...fields];
    values[idx].value = event.target.value;
    setFields(values);
  }
  // need to make sure that getInitialState has updated our state field before rendering/building input fields
  let doRender = fields ? fields.length === parms.length : false;
  return (
    <Wrapper>
      <Header>{location} API Call</Header>
      <InputWrapper>
        {doRender &&
          parms.map((field, idx) => {
            return (
              <div key={idx}>
                <Label>{field.charAt(0).toUpperCase() + field.slice(1)}:</Label>
                <Input
                  value={fields[idx].value}
                  onChange={e => handleChange(idx, e)}
                />
              </div>
            );
          })}
      </InputWrapper>
      <ButtonWrapper>
        <Button
          type="primary"
          onClick={async () =>
            setResults(
              await apiCallFunction(
                ...fields.map(field => {
                  return field.value.length > 0 ? field.value : undefined;
                })
              )
            )
          }
        >
          Call API
        </Button>
      </ButtonWrapper>
      <APIFunctions results={results} />
      <APIResults results={results} />
    </Wrapper>
  );
};

export default APICall;
