import * as React from 'react';
import ReactTimeAgo from 'react-time-ago';
import Typography from '@mui/material/Typography';
import Title from '../Title';
import { Link } from 'react-router-dom';

export default function BoxBlock(props) {
    if(props.block.number) {
    return (
            <><Title>Block Number: <Link to={`Block/${props.block.number}`}>{props.block.number}</Link></Title>
            <Typography component="p" variant="h4">
            From: <ReactTimeAgo date={props.block.timestamp * 1000} locale="en-US" timeStyle="twitter" />
        </Typography>
        <Typography color="text.secondary" sx={{ flex: 1 }}>
                Number of Transactions: {props.block.transactions.length}
            </Typography></>
    );
  } else {
    return (
        <><Title>Block Number: waiting for data...</Title></>
    );
  }
  }