import {Text, View, StyleSheet} from 'react-native';

export default function HelloWorld() {
  return (
    <View style ={styles.helloWorldStyle}>
      <Text>Kaylee Schultz</Text>
      <Text>MSCS</Text>
      <Text>City University of Seattle</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  helloWorldStyle: {
    flex: 1,
    backgroundColor: "#ffff00",
    justifyContent: "center",
    alignItems: "center"
  },
});