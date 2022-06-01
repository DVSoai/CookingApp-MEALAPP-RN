import React from "react";
import { View, StyleSheet, Text } from "react-native";
function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  subtitle: {
    color: "#e2b497",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    padding: 6,
    margin: 4,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
});
export default Subtitle;
