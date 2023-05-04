import { ScrollView } from './Themed';
import React from 'react';
import data from '../service/response_1683133892459';
import CoinListItem from './CoinListItem';

export default function CoinList() {
  return (
    <ScrollView>
      {data.map((coin, index) => (
        <CoinListItem key={index} coin={coin}></CoinListItem>
      ))}
    </ScrollView>
  );
}
