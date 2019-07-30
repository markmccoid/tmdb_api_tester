import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import APICall from "./APIViews/APICall";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  background: rgb(75.3%, 75.3%, 75.3%);
  border-bottom: 1px solid black;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 10px 0;
  width: 100%;
`;
const APIView = ({ currSidebarState, subMenuState }) => {
  let { id, label } = currSidebarState;
  console.log("APIView", currSidebarState, subMenuState);

  return (
    <Wrapper>
      <Header>{label}</Header>

      {subMenuState && (
        <APICall
          location={subMenuState}
          apiCallFunction={currSidebarState.subMenuItems[subMenuState].func}
          parms={[...currSidebarState.subMenuItems[subMenuState].parms]}
        />
      )}
    </Wrapper>
  );
};

APIView.propTypes = {
  currSidebarState: PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
    subMenuItems: PropTypes.object
  }),
  subMenuState: PropTypes.string
};
export default APIView;
