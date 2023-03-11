import * as React from 'react';
import { Utils } from 'alchemy-sdk';
import Typography from '@mui/material/Typography';
import Title from '../Title';

export default function TxDetails(props) {
    if(props.tx.transactionHash) {
    return (
            <><Title>Transaction:</Title>
            <Typography color="text.secondary">
            From: {props.tx.from}
        </Typography>
        <Typography color="text.secondary">
                To: {props.tx.to}
            </Typography>
            <Typography color="text.secondary">
                Gas price: {Utils.formatUnits(parseInt(props.tx.effectiveGasPrice),"gwei")}
            </Typography>
            <Typography color="text.secondary">
                Transaction fee: {parseInt(props.tx.gasUsed)*Utils.formatUnits(parseInt(props.tx.effectiveGasPrice))} ETH (${parseInt(props.tx.gasUsed)*Utils.formatUnits(parseInt(props.tx.effectiveGasPrice))*props.gas.data.priceUSD})
            </Typography>
        <Typography color="text.secondary" sx={{ flex: 1 }}>
                Status: {props.tx.status ? "Successful":"Failed"}
            </Typography></>
    );
  } else {
    return (
        <><Title>Transaction: waiting for data...</Title></>
    );
  }
  }