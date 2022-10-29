import { StyleSheet, Text, View, Pressable } from 'react-native';
import DropShadow from "react-native-drop-shadow"; //wooo doesn't work for whatever ungodly reason

const BookListItem = (props) => {
    return (
        <View>
            <Text style={styles.h2}>{props.title}</Text>
            <Text style={styles.author}>By {props.author}</Text>
            <Text style={styles.description}>{props.description}</Text>
            <View style={styles.row}>
                <Text style={styles.isbn}>ISBN {props.isbn}</Text>
                    <Pressable style={styles.readBtn}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16, fontFamily: 'monospace', }}>READ</Text>
                    </Pressable>
            </View>
            <View style={styles.line}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    h2: {
        fontSize: 30,
        fontWeight: 'bold',
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
        marginVertical: 20,
    },
})

export default BookListItem;