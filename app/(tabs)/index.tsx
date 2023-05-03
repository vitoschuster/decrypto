import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello{'\n'}there</Text>

      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: '500',
    lineHeight: 50
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
