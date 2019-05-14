import React, { useState } from 'react';
import styled from 'styled-components';

import Sidebar from './Sidebar/Sidebar';
import APIView from './APIView';
import { TVAPI_ParmsObj, MovieAPI_ParmsObj, APITV_ParmsObj } from './APIViews/apiCallObjects';


const Grid = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  min-height: 90vh;
  margin: 0 15%;
  border: 1px solid gray;
`;

/**
 * sidebarItems defines the Views that will be shown
 * in the APIView component.
 */
const sidebarItems = [
  {
    id: 0,
    label: 'Raw TV API',
    subMenuItems: TVAPI_ParmsObj,
  },
  {
    id: 1,
    label: 'Raw Movie API',
    subMenuItems: MovieAPI_ParmsObj,
  },
  {
    id: 2,
    label: 'TV API',
    subMenuItems: APITV_ParmsObj,
  },
  {
    id: 3,
    label: 'Movie API',
    subMenuItems: {},
  },
]

const Main = () => {
  let [sidebarState, setSidebar] = useState(sidebarItems[0].id);
  let [subMenuState, setSubMenu] = useState();

  return (
    <Grid>
        <Sidebar 
          sidebarItems={sidebarItems} 
          sidebarState={sidebarState} 
          setSidebar={setSidebar} 
          setSubMenu={setSubMenu}  
        />
        <APIView currSidebarState={sidebarItems[sidebarState]} subMenuState={subMenuState}/>
    </Grid>
  )
};

export default Main;