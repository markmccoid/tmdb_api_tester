import React, { useState } from 'react';
import styled from 'styled-components';

import Sidebar from './Sidebar/Sidebar';
import APIView from './APIView';
import {
  generalObj,
  TVAPI_ParmsObj,
  MovieAPI_ParmsObj,
  APIGEN_ParmsObj,
  APITV_ParmsObj,
  APIMovie_ParmsObj,
} from './APIViews/apiCallObjects';

import * as apis from '@markmccoid/tmdb_api';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  min-height: calc(100vh - 40px);
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
    label: 'Raw General',
    subMenuItems: generalObj,
  },
  {
    id: 1,
    label: 'Raw TV API',
    subMenuItems: TVAPI_ParmsObj,
  },
  {
    id: 2,
    label: 'Raw Movie API',
    subMenuItems: MovieAPI_ParmsObj,
  },
  {
    id: 3,
    label: 'Curated General',
    subMenuItems: APIGEN_ParmsObj,
  },
  {
    id: 4,
    label: 'Curated TV API',
    subMenuItems: APITV_ParmsObj,
  },
  {
    id: 5,
    label: 'Curated Movie API',
    subMenuItems: APIMovie_ParmsObj,
  },
];

const Main = () => {
  let [sidebarState, setSidebar] = useState(sidebarItems[0].id);
  let [subMenuState, setSubMenu] = useState();
  console.log(Object.keys(apis));

  return (
    <Grid>
      <Sidebar
        sidebarItems={sidebarItems}
        sidebarState={sidebarState}
        setSidebar={setSidebar}
        setSubMenu={setSubMenu}
      />
      <APIView
        currSidebarState={sidebarItems[sidebarState]}
        subMenuState={subMenuState}
      />
    </Grid>
  );
};

export default Main;
