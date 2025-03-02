import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My ToDos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 30,
    backgroundColor: '#8ab21d',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 600,
    color: 'white',
  },
});
