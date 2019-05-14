import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;

`;

const Sidebar = styled.div`
  width: 100%;
`;

const SidebarItems = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const SidebarLink = styled.a`
  display: block;
  background: lightgray;
  border: 1px solid black;
  border-top: none;
  border-right: none;
  cursor: pointer;
  padding: 5px;
  margin-left: 10px;
  text-align: left;
  color: black;
  &:hover {
    background: gray;
    color: white;
  }
`;

const SidebarSubMenu = (props) => {

  return (
    <Wrapper>
      <Sidebar>
        <SidebarItems>
          {(props.subMenuObj && props.isVisible) && Object.keys(props.subMenuObj).map((APIKey) => {
              return (
                <li key={APIKey}><SidebarLink onClick={() => props.setSubMenu(APIKey)}>{APIKey}</SidebarLink></li>
              )
          })
          }
        </SidebarItems>
      </Sidebar>
    </Wrapper>
  )
};

export default SidebarSubMenu;