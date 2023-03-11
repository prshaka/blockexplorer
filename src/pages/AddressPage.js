import * as React from 'react';
import Title from '../Title';
import TableBalances from '../comps/TableBalances';
import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Grid, Paper } from '@mui/material';

export default function AddressPage(props) {
 
    let params = useParams();
  
    const [tokens, setTokens] = useState([]);
  
    useEffect(() => {
        const settings = {
            apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
            network: Network.ETH_MAINNET,
          };
          const alchemy = new Alchemy(settings);

        async function getTokens() {

            const balances = await alchemy.core.getTokenBalances(params.addr);

  // Remove tokens with zero balance
  const nonZeroBalances = balances.tokenBalances.filter((token) => {
    return token.tokenBalance !== "0";
  });
              // Counter for SNo of final output
  const result = [];

  // Loop through all tokens with non-zero balance
  for (let token of nonZeroBalances) {
    // Get balance of token
    let balance = token.tokenBalance;

    // Get metadata of token
    const metadata = await alchemy.core.getTokenMetadata(token.contractAddress);

    // Compute token balance in human-readable format
    balance = balance / Math.pow(10, metadata.decimals);
    balance = balance.toFixed(6);

    // Print name, balance, and symbol of token
    result.push({name: metadata.name, balance: balance, symbol: metadata.symbol});
  }

            setTokens(result);
      }
      getTokens();
    },[params.addr]);
    console.log(tokens);
  
    return (
        <>
            <Title>Address</Title>
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
                    {params.addr}
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <TableBalances tokens={tokens} />
                </Paper>
              </Grid>
            </Grid>
        </>
    );

  };