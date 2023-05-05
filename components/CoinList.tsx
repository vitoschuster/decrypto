import { View } from './Themed';
import { FlatList } from 'react-native';
import React from 'react';
import data from '../service/response_1683133892459';
import CoinListItem from './CoinListItem';
import ListHeader from './ListHeader';
import { Coin } from '../types/Coin';
import { Link } from 'expo-router';

export default function CoinList() {
  return (
    <View>
      <ListHeader title="Market" />
      <FlatList
        keyExtractor={(data) => data.id}
        data={data}
        renderItem={({ item }) => <CoinListItem coin={item} />}
        showsVerticalScrollIndicator={false}
      ></FlatList>
    </View>
  );
}
