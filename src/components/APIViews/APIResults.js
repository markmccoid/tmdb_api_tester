import React from 'react';
import ReactJson from 'react-json-view';
import styled from 'styled-components';

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
const APICall = styled.div`
  font-size: 1.1rem;
  padding: 15px;
  background:rgb(57.6%, 94.1%, 57.6%);
  text-align: left;
`;

const APIResults = ({ results }) => {
  if (!results) return null;
  console.log('RESULTS', results)
  return (
    <>
      <Header style={{display: "block"}}>Results</Header>
      <APICall>{results ? results.apiCall : null}</APICall>
      {results && 
        <div style={{textAlign: "left"}}>
          <ReactJson 
            src={results.data} 
            style={{paddingTop: "10px"}}
            theme="monokai" 
            collapseStringsAfterLength={50} 
            indentWidth={2}
          />
        </div>}
    </>
      
  )
};

export default APIResults;