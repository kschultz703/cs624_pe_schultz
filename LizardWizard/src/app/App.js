import { Text, View, StyleSheet } from "react-native";
import ElementSelect from "./ElementSelect"

export default function Index() {
  return (
    <ElementSelect/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});