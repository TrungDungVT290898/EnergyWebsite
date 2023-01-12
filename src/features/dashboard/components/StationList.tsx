import React, { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';

import { Box, Grid, Stack, Typography } from '@mui/material';
import * as moment from 'moment';
import { EnergyPayLoad } from '../../../models';
import stationAPI from '../../../api/stationAPI';
import DeviceCard from '../../../components/Device';
import Chart from './Chart';
const StationList = () => {
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
      <Stack>
        <Grid container spacing={1} m={1}>
          {data
            ? data.content.devices.map((device) => (
                <Grid item xl={3} lg={3} xs={12} md={6}>
                  <DeviceCard date={date} data={device}></DeviceCard>
                </Grid>
              ))
            : 'Server Error'}
        </Grid>
      </Stack>

      <Stack sx={{ width: '100%', height: 300 }}>
        <Chart />
      </Stack>
    </Box>
  );
};

export default StationList;
