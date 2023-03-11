import * as React from 'react';
import Title from '../Title';
import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Grid, Paper } from '@mui/material';
import TableTxs from '../comps/TableTxs';
import BoxBlock from '../comps/BoxBlock';

export default function BlockPage() {

    let params = useParams();
  
    const [block, setBlock] = useState([]);
  
    useEffect(() => {
        const settings = {
            apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
            network: Network.ETH_MAINNET,
          };
          const alchemy = new Alchemy(settings);

        async function getBlock() {
        setBlock(await alchemy.core.getBlockWithTransactions(Number(params.number)));
      }
      getBlock();
    },[params.number]);
  
    return (
        <>
            <Title>Block</Title>
            <Grid container spacing={3}>
            <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    //height: 240,
                  }}
                >
                  <BoxBlock block={block} />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <TableTxs block={block} />
                </Paper>
              </Grid>
            </Grid>
        </>
    );

  };