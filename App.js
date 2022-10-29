import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

import BookListItem from './assets/components/BookListItem';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.h1}>Bookshop</Text>
        <Image style={styles.icon} source={require("./assets/images/shopping_cart.png")}></Image>
        <Text style={styles.cartNumber}>1</Text>
      </View>
      <BookListItem 
        title="Test Book" 
        author="Jeffrey Dahmer" 
        description="Why are we still here, just to suffer? The people we've lost. It keeps hurting. Sometimes i just wish i was dead u know. Actually pretty often." 
        isbn="0-8694-3823-9">
      </BookListItem>
      <BookListItem 
        title="Test Book" 
        author="Jeffrey Dahmer" 
        description="Why are we still here, just to suffer? The people we've lost. It keeps hurting. Sometimes i just wish i was dead u know. Actually pretty often." 
        isbn="0-8694-3823-9">
      </BookListItem>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  top: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    paddingBottom: 5,
  },
  h1: {
    fontSize: 45,
    fontWeight: 'bold',
    fontFamily: 'monospace'
  },
  icon: {
    aspectRatio: 1/1,
    flexBasis: 40,
    marginRight: 15,
    marginTop: 10,
  },
  cartNumber: {
    fontSize: 25,
    position: 'absolute',
    right: 0,
    bottom: 0, 
  }
});
