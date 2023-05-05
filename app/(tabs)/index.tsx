import { StyleSheet } from 'react-native';
import { Pressable, Text, View } from '../../components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import CoinList from '../../components/CoinList';
import MainHeader from '../../components/MainHeader';

export default function Home() {
  return (
    <SafeAreaView style={{padding: 3}}>
        <MainHeader />
        <CoinList />
    </SafeAreaView>
  );
}

