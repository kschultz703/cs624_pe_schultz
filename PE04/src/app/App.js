import { Component } from 'react'
import { View, ScrollView} from 'react-native'
import Button from "./Button";
import Heading from './Heading';
import Input from './Input';
import TabBar from './TabBar'
import TodoList from "./TodoList"
import styles from './styles';

let index = 0

class App extends Component {
  constructor() {
    super();
    this.state = {
        inputValue: '',
        todos: [],
        type: 'All',
    };
    this.submitTodo = this.submitTodo.bind(this)
    this.toggleComplete = this.toggleComplete.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
    this.setType = this.setType.bind(this)
  }

  submitTodo() {
    if(!this.state.inputValue.match(/^\s*$/)) {
      const todo = {
        title: this.state.inputValue,
        index,
        complete: false
      }

      const todos = [...this.state.todos, todo]
      this.setState({todos, inputValue: ""}, () => {
        console.log("State: ", this.state)
      })

      index++;
    }
  }
  
  toggleComplete(index) {
    let { todos } = this.state
    todos.forEach((todo) => {
      if (todo.index === index) {
        todo.complete = !todo.complete
      }
    })
    this.setState({todos})
  }

  deleteTodo(index) {
    let { todos } = this.state
    todos = todos.filter((todo) => todo.index !== index)
    this.setState({ todos })
  }

  inputChange(inputValue) {
    console.log('Input Value: ' , inputValue)
    this.setState({ inputValue })
  }

  setType(type) {
    this.setState({ type })
  }

  render() {
    const {inputValue, todos, type} = this.state

    return (
      <View style={styles.container}>
        <ScrollView 
          keyboardShouldPersistTaps="always" 
          style={styles.content}
        >
          <Heading />
          <Input 
            inputValue={inputValue}
            inputChange={(text) => this.inputChange(text)} 
          />
          <TodoList 
            todos={todos}
            toggleComplete={this.toggleComplete}
            deleteTodo={this.deleteTodo}
            type={type}
          />
          <Button submitTodo={this.submitTodo}/>
        </ScrollView>
        <TabBar type={type} setType={this.setType} />
      </View>
    )
  }
}

export default App