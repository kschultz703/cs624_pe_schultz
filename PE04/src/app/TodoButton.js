import React from 'react'
import { Text, TouchableHighlight} from 'react-native'
import styles from './styles';

const TodoButton = ({ onPress, complete, name }) => (  
    <TouchableHighlight
        onPress={onPress}
        underlayColor='#efefef'
        style={styles.todoButton}>
        <Text
            style={[
                styles.todoButtonText,
                complete ? styles.completeButton : null,
                name === 'Delete' ? styles.deleteButton : null
            ]} 
        >
            {name}
        </Text>
    </TouchableHighlight>
)

export default TodoButton