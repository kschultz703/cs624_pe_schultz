import { View, Text, StyleSheet} from 'react-native'

const Heading = ({ headerText }) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>{headerText}</Text>
  </View>
);

const styles = StyleSheet.create({
    header: {
        marginTop: 80,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 40,
        color: '#222222',
    },
});

export default Heading;