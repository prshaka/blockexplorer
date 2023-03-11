import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Title from '../Title';
import { Alchemy, Network } from 'alchemy-sdk';
import { Grid, Paper } from '@mui/material';
import TxDetails from '../comps/TxDetails';
  
  export default function TxPage(props) {
    let params = useParams();

    const [tx, setTx] = useState([]);

    useEffect(() => {
        const settings = {
            apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
            network: Network.ETH_MAINNET,
          };
          const alchemy = new Alchemy(settings);

          async function getTx() {
            setTx(await alchemy.core.getTransactionReceipt(params.hash));
        }
        getTx();
    },[params.hash]);

    if(tx.length) {
        console.log(tx);
    }
    return (
        <>
            <Title>Transaction {params.hash}</Title>
            <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    //height: 240,
                  }}
                >
                  <TxDetails tx={tx} gas={props.gas} />
                </Paper>
              </Grid>
            </Grid>
        </>
    );
  }