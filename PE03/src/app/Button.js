import { View, Text, TouchableHighlight } from 'react-native'
import styles from './styles'

const Button = ({ submitTodo }) => (
    <View style = {styles.buttonContainer}>
        <TouchableHighlight 
            style = {styles.button}
            onPress = {submitTodo}>
            <Text style = {styles.buttonSubmit}>
                Submit
            </Text>
        </TouchableHighlight>
    </View>
);

export default Button;