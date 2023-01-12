import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';

import FaceIcon from '@mui/icons-material/Face';
import WomanIcon from '@mui/icons-material/Woman';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import Stack from '@mui/material/Stack/Stack';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { dashboardActions, selectDeviceLoading } from './dashboardSlice';
import LinearProgress from '@mui/material/LinearProgress';
import StationList from './components/StationList';
function Dashboard() {
  const loading = useAppSelector(selectDeviceLoading);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(dashboardActions.fetchData());
  }, []);
  const gridStyle = {
    width: 'auto',
    height: 30,
    border: '1px solid black',
    borderRadius: 3,
    marginLeft: 2,
  };
  const gridContainer = {
    display: 'flex',
    flexBasis: '10%',
    justifyContent: 'center',
  };

  return (
    <h1>
      <StationList />
    </h1>
  );
}

export default Dashboard;
