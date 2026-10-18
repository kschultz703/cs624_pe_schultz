import { View, Text, Image, ScrollView, TextInput, StyleSheet} from 'react-native';

export default function Index() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Some more text</Text>
        <Image 
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
        />
        <Text>What is your favorite course?</Text>
        <TextInput 
          style={styles.input}
          defaultValue="Dinner! :)"
          clearTextOnFocus={true}/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 50,
    width: 250,
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: "center"
  },
});
