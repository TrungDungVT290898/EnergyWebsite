import React, { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { json } from 'stream/consumers';
import axiosClient from '../../api/axiosCient';
import stationAPI from '../../api/stationAPI';
import DeviceCard from '../../components/Device';
import { EnergyPayLoad } from '../../models';
import WavesIcon from '@mui/icons-material/Waves';
import OpacityIcon from '@mui/icons-material/Opacity';
import { DB } from '../../utils/StationDB';
import { Box, Grid, Stack, Typography } from '@mui/material';
import * as moment from 'moment';
const Test = () => {
  const [data, setData] = useState<EnergyPayLoad>();
  const [date, setDate] = useState<Date>();
  // Access the client
  const queryClient = useQueryClient();

  // Queries
  const query = useQuery(
    '/dashboard',
    async () => {
      const res = await stationAPI.getById('Dakhai');
      setData(res);
      if (res) setDate(new Date(res.msg.date));
    },
    {
      refetchInterval: 2000,
    },
  );

  return (
    <Box>
      <Grid container spacing={1}>
        {data
          ? data.content.devices.map((device) => (
              <Grid item xl={3} lg={3} xs={12} md={6}>
                <DeviceCard date={date} data={device}></DeviceCard>
              </Grid>
            ))
          : 'Server Error'}
      </Grid>
    </Box>
  );
};

export default Test;
