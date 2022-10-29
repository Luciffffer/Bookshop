import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.h1}>Bookshop</Text>
        <Image style={styles.icon} source={require("./assets/images/shopping_cart.png")}></Image>
        <Text style={styles.cartNumber}>1</Text>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15
  },
  top: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 40,
    paddingBottom: 5,
  },
  h1: {
    fontSize: 45,
    fontWeight: 'bold'
  },
  icon: {
    aspectRatio: 1/1,
    flexBasis: 45,
    marginRight: 15
  },
  cartNumber: {
    fontSize: 25,
    position: 'absolute',
    right: 0,
    bottom: 0, 
  }
});
