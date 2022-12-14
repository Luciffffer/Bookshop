import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import DropShadow from "react-native-drop-shadow"; //wooo doesn't work for whatever ungodly reason

const BookListItem = (props) => {
    return (
        <View>
            <View style={styles.topColumn}>
                <Image style={styles.bookImage} source={props.image}/>
                <View style={styles.basicInfo}>
                    <Text style={styles.h2} onPress={() => console.log("Title pressed")}>{props.title}</Text>
                    <Text style={styles.author}>By {props.author}</Text>
                    <Text style={styles.description}>{props.description}</Text>
                </View>
            </View>
            <View style={styles.row}>
                <Text style={styles.isbn}>ISBN {props.isbn}</Text>
                    <Pressable style={styles.readBtn} onPress={() => console.log("Time to read")}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16, fontFamily: 'monospace', }}>READ</Text>
                    </Pressable>
            </View>
            <View style={styles.line}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    topColumn: {
        flexDirection: 'row',
        paddingVertical: 10,
    },
    basicInfo: {
        flex: 5,
        marginLeft: 20,
    },
    bookImage: {
        aspectRatio: 1/1.5,
        flex: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    h2: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'jetBrainsMono',
    },
    author: {
        fontSize: 16,
        fontFamily: 'monospace',
    },
    description: {
        fontSize: 16,
        marginVertical: 16,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    isbn: {
        fontFamily: 'monospace',
        fontSize: 15,
        flex: 1,
    },
    readBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderWidth: 3,
        borderColor: 'black',
    },
    shadowProp: {
        shadowColor: 'black',
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 100,
        shadowRadius: 1,
    },
    line: {
        height: 3,
        backgroundColor: 'black',
        marginVertical: 25
    },
})

export default BookListItem;