import { View, Text, StyleSheet } from "react-native";
import React from "react";

function MealDetails({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) {
  return (
    <View style={[styles.details, styles]}>
      <Text style={[styles.detailsItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailsItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailsItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 8,
  },
  detailsItem: {
    marginHorizontal: 4,
    fontSize: 16,
  },
});
export default MealDetails;
