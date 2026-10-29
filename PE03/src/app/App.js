import { Component } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import Button from "./Button";
import Heading from './Heading';
import Input from './Input';
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
  }

  inputChange(inputValue) {
    console.log('Input Value: ' , inputValue)
    this.setState({ inputValue })
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView 
          keyboardShouldPersistTaps="always" 
          style={styles.content}
        >
          <Heading />
          <Input 
            inputValue={this.state.inputValue}
            inputChange={(text) => this.inputChange(text)} 
          />
          <Button submitTodo={this.submitTodo}/>
        </ScrollView>
      </View>
    )
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
}

export default App