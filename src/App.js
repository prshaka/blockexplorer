import React from 'react';
import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect, useState } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import BlockPage from './pages/BlockPage';
import TxPage from './pages/TxPage';
import AddressPage from './pages/AddressPage';

const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(settings);

export default function App() {

  const [block, setBlock] = useState([]);

  useEffect(() => {
    async function getBlock() {
      setBlock(await alchemy.core.getBlockWithTransactions());
    }
    getBlock();
  },[]);

  const [gas, setGas] = useState([]);

  useEffect(() => {
      async function getGas() {
        setGas(await (await fetch("https://ethgasprice.org/api/gas")).json());
      }
      getGas();
    },[]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout gas={gas} />}>
        <Route index element={<Home block={block} />} />
        <Route path="block/:number" element={<BlockPage />} />
        <Route path="address/:addr" element={<AddressPage />} />
        <Route path="transaction/:hash" element={<TxPage gas={gas} />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};