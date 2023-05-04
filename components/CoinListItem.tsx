import React from 'react';
import { Text, View, Pressable } from './Themed';
import { StyleSheet, Image } from 'react-native';
import { Coin } from '../types/Coin';

interface CoinProps {
  coin: Coin;
}

export default function CoinListItem(props: CoinProps) {
  const { coin } = props;
  return (
    <Pressable smallestScale={0.98}>
      <View style={styles.itemContainer}>
        <View style={styles.leftContainer}>
          <Image
            style={styles.image}
            resizeMode={'contain'}
            source={{ uri: `${coin.image}`}}
          />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{coin.name}</Text>
            <Text style={styles.subTitle}>{coin.symbol}</Text>
          </View>
        </View>
        <View style={styles.graph}>
          <Text>GRAPH</Text>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.title}>$ {coin.current_price}</Text>
          <Text style={[styles.subTitle, { color: 'red' }]}>
            {coin.price_change_24h}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 8,
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    marginRight: 8,
    height: 32,
    width: 32
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainer: {},
  title: {},
  subTitle: {},
  graph: {},
  rightContainer: {},
});
