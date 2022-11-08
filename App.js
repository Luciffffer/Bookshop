import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import DropShadow from "react-native-drop-shadow";

import BookListItem from './assets/components/BookListItem';

const bookList = [
  {
    name: "American Psycho",
    author: "Bret Easton Ellis",
    description: "Patrick Bateman moves among the young and trendy in 1980s Manhattan. Young, handsome, and well educated, Bateman...",
    isbn: "0-6797-3577-1",
    image: require("./assets/images/american-psycho.jpg")
  },
  {
    name: "De verhulstjes",
    author: "Gert Verhulst",
    description: "i sometimes sincerely wish i were dead u know. Maybe it's just a me thing but idk. Just really do not like my life. If i could die i would",
    isbn: "0-8694-3823-9",
    image: require("./assets/images/last-wish.jpg")
  }
]

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.h1}>Bookshop</Text>
        <DropShadow>
          <View style={styles.topSide}>
            <Image style={styles.icon} source={require("./assets/images/shopping_cart.png")}></Image>
            <Text style={styles.cartNumber}>1</Text>
          </View>
        </DropShadow>
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
    fontFamily: 'monospace',
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
    alignItems: "center",
    backgroundColor: "#EEF4E6",
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 0,
  },
});
