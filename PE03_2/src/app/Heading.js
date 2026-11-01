import { View, Text} from 'react-native'
import styles from './styles';

const Heading = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>todos</Text>
  </View>
);

export default Heading;