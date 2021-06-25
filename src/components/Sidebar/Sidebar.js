import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SidebarSubMenu from "./SidebarSubMenu";

import TestAPI from "./TestAPI";

const Wrapper = styled.div`
  background: aliceblue;
  border-right: 1px solid black;
`;

const WrapperUL = styled.ul`
  margin: 0;
  padding: 0;
`;
const Item = styled.li`
  list-style: none;
  margin: 0;

  text-align: left;
`;
const ItemLink = styled.a`
  display: block;
  font-size: 1.2rem;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding: 0 0 0 10px;
  cursor: pointer;
  background: ${(props) => (props.selected ? "lightgray" : "white")};

  &:hover {
    background: gray;
  }
`;
const Sidebar = ({ sidebarItems, sidebarState, setSidebar, setSubMenu }) => {
  return (
    <Wrapper>
      <WrapperUL>
        {sidebarItems.map((sidebarItem) => (
          <Item key={sidebarItem.id}>
            <ItemLink
              selected={sidebarItem.id === sidebarState}
              onClick={() => {
                setSidebar(sidebarItem.id);
                setSubMenu(null);
              }}
            >
              {sidebarItem.label}
            </ItemLink>
            <SidebarSubMenu
              subMenuObj={sidebarItem.subMenuItems}
              setSubMenu={setSubMenu}
              isVisible={sidebarItem.id === sidebarState}
            />
          </Item>
        ))}
      </WrapperUL>
      <TestAPI />
    </Wrapper>
  );
};

Sidebar.propTypes = {
  sidebarItems: PropTypes.array,
  sidebarState: PropTypes.number,
  setSidebar: PropTypes.func,
  setSubMenu: PropTypes.func,
};
export default Sidebar;
