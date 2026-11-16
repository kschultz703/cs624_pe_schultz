
// Listing 5.6 Adding flexDirection: 'row' to the parent container
import { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.flexContainer}>
                    <Example>A</Example>
                    <Example>B</Example>
                </View>
                <View style={styles.flexContainer}>
                    <Example>C</Example>
                    <Example>D</Example>
                </View>
                <View style={styles.flexContainer}>
                    <Example>E</Example>
                    <Example>F</Example>
                </View>
            </View>
        );
    }
}

const Example = (props) => (
    <View style={[styles.example, styles.lightgrey, props.style]}>
        <Text>
            {props.children}
        </Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        alignItems: 'center',
        flex: 1
    },
    flexContainer: {
        width: 150,
        height: 150,
        borderWidth: 1,
        margin: 10,
        flexDirection: 'row'
    },
    darkgrey: {
        backgroundColor: '#666666'
    },
    lightgrey: {
        backgroundColor: '#ededed'
    },
    example: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});