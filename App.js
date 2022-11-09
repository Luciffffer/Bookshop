import { useEffect, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import BookListItem from './assets/components/BookListItem';
import bookList from './assets/data/bookList.js';

export default function App() {
  const [fontsLoaded] = useFonts({
    'jetBrainsMono': require('./assets/fonts/jetBrainsMono.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }


  return (
    <ScrollView style={styles.container} onLayout={onLayoutRootView}>
      <View style={styles.top}>
        <Text style={styles.h1}>GudBooks</Text>
        <View style={styles.topSide}>
          <Image style={styles.icon} source={require("./assets/images/shopping_cart.png")}></Image>
          <Text style={styles.cartNumber}>1</Text>
        </View>
      </View>
      {bookList.map((props) => <BookListItem key={props.name} title={props.name} author={props.author} description={props.description} isbn={props.isbn} image={props.image}></BookListItem>)}
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F5EF',
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
    fontFamily: 'jetBrainsMono',
    flex: 4,
  },
  icon: {
    aspectRatio: 1/1,
    width: 35,
    marginRight: 15,
    marginTop: 10,
  },
  cartNumber: {
    fontSize: 25,
  },
  topSide: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    backgroundColor: "#EEF4E6",
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 0,
  },
});
