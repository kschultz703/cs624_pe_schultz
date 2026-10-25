import { View, TextInput, StyleSheet } from 'react-native';
import styles from './styles';

const Input = ({ inputValue, inputChange }) => (
  <View style={styles.inputContainer}>
    <TextInput
      value={inputValue}
      style={styles.input}
      placeholder='What needs to be done?'
      placeholderTextColor='#CACACA'
      selectionColor='#666666' 
      onChangeText={inputChange} />
  </View>
);

export default Input;