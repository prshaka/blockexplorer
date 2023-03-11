import React from 'react';
import { IconButton, Badge } from '@mui/material';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export default function Gas(props) {

      if(props.gas.code === 200) {
return (
    <><IconButton color="inherit">
      <AttachMoneyIcon />{props.gas.data.priceUSD}
  </IconButton>
  <IconButton color="inherit">
    <Badge badgeContent={props.gas.data.standard} color="secondary">
      <LocalGasStationIcon />
    </Badge>
  </IconButton></>
);

      } else {
        return (
            <><IconButton color="inherit">
              <LocalGasStationIcon />
          </IconButton></>
        );        
      }
    }