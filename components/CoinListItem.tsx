import React from 'react';
import { Text, Pressable } from './Themed';
import { StyleSheet, Image, View} from 'react-native';
import { Coin } from '../types/Coin';
import { Link } from 'expo-router';

interface CoinProps {
  coin: Coin;
}

export default function CoinListItem(props: CoinProps) {
  const { coin } = props;
  const priceChangeColor = coin.price_change_percentage_24h > 0 ? '#48D49E' : '#ff6257'

  return (
    <Link href='/modal' asChild>
    <Pressable smallestScale={0.98}>
      <View style={styles.itemContainer}>
        <View style={styles.leftContainer}>
          <Image
            style={styles.image}
            resizeMode={'contain'}
            source={{ uri: `${coin.image}`}}
          />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{coin.name.length > 11 ? coin.symbol.toUpperCase() : coin.name}</Text>
            <Text style={[styles.subTitle, {opacity: 0.75}]}>{coin.symbol.toUpperCase()}</Text>
          </View>
        </View>
        <View style={styles.graph}>
          <Text>GRAPH</Text>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.title}>${coin.current_price.toLocaleString('en-US', {currency: 'USD'})}</Text>
          <Text style={[styles.subTitle, { color: priceChangeColor }]}>
            {coin.price_change_percentage_24h}
          </Text>
        </View>
      </View>
    </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    borderRadius: 16,
    paddingHorizontal: 8,
    marginVertical: 16,
    marginHorizontal: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    marginRight: 8,
    height: 36,
    width: 36
  },
  leftContainer: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainer: {
    paddingLeft: 3
  },
  title: {
    fontSize: 16,
    paddingBottom: 0.85
  },
  subTitle: {
    fontSize: 13.5,
  },
  graph: {
    flex: 3
  },
  rightContainer: {
    flex: 2,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
});
