import React from 'react' 
import { View, Text} from 'react-native'
import TodoButton from './TodoButton'
import styles from './styles';

const Todo = ({ todo, toggleComplete, deleteTodo }) => (
  <View style={styles.todoContainer}>
    <Text style={styles.todoText}>
      {todo.title}
    </Text>
    <View style={styles.todoButtons}>
      <TodoButton 
        name='Done'
        complete={todo.complete}
        onPress={() => toggleComplete(todo.index)} 
      />  
      <TodoButton 
        name='Delete'
        onPress={() => deleteTodo(todo.index)} 
      />
    </View>
  </View>
)

export default Todo