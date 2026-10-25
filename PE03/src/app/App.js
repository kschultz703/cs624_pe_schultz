import { Component } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import Heading from './Heading';
import Input from './Input';
import styles from './styles';

class App extends Component {
  constructor() {
    super();
    this.state = {
        inputValue: '',
        todos: [],
        type: 'All',
    };
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
        </ScrollView>
      </View>
    )
  }
}

export default App