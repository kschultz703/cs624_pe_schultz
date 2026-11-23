import { View, Text, StyleSheet} from 'react-native'

const Heading = ({ headerText }) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>{headerText}</Text>
  </View>
);

const styles = StyleSheet.create({
    header: {
        marginTop: 80,
        textAlign: "center",
    },
    headerText: {
        textAlign: 'center',
        fontSize: 60,
        color: '#222222',
        fontWeight: '100'
    },
});

export default Heading;