import { StyleSheet } from 'react-native';
import { Pressable, Text, View } from '../../components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import CoinList from '../../components/CoinList';

export default function Home() {
  return (
    <SafeAreaView style={{padding: 5}}>
        <Header />
        <CoinList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    fontWeight: '500',
    lineHeight: 50
  },
});
