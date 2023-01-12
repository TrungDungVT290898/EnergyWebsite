import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Device, EnergyPayLoad } from '../models';
import WavesIcon from '@mui/icons-material/Waves';

import { OverridableComponent } from '@mui/material/OverridableComponent';
import { Box, SvgIconTypeMap } from '@mui/material';
import { DB } from '../utils/StationDB';
import { Stack } from '@mui/system';

export interface DeviceProps {
  data: Device;
  date?: Date;
}
export default function DeviceCard({ data, date }: DeviceProps) {
  const info = DB.find((s) => s.name == data.solution[0].env);
  return (
    <>
      {info ? (
        <Box>
          <Card>
            <Box
              sx={{
                display: 'flex',
              }}
            >
              <CardMedia sx={{ height: 50 }}>
                {info?.image ? (
                  <info.image sx={{ height: '100%', width: '100%', color: 'blue' }} />
                ) : (
                  <WavesIcon sx={{ height: '100%', width: '100%', color: 'blue' }} />
                )}
              </CardMedia>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography gutterBottom variant="body1" textAlign="center">
                  {info?.VName}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {data.solution.map((s) => (
                    <div key={`${data.serial}`}>
                      <div>Giá trị:</div>
                      {`${s.value}`}
                    </div>
                  ))}
                </Typography>
              </CardContent>
            </Box>
            <Box>
              <Typography variant="body1" color="text.secondary">
                <div key={'_dated'}>
                  <div>Cập nhật:{date?.toDateString()}</div>
                </div>
              </Typography>
            </Box>
          </Card>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
}
