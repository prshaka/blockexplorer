import * as React from 'react';
import { Grid, Paper } from '@mui/material';
import TableTxs from '../comps/TableTxs';
import BoxBlock from '../comps/BoxBlock';
import Search from '../comps/Search';

export default function Home(props) {
    return (
            <>
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
                  <BoxBlock block={props.block} />
                </Paper>
              </Grid>
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    //height: 240,
                  }}
                >
                  <Search />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <TableTxs block={props.block} />
                </Paper>
              </Grid>
            </Grid>
</>
    );
  }