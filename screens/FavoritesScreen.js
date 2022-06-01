import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { useSelector } from "react-redux";

import MealList from "../components/MealList/MealList";
import { MEALS } from "../data/Dummy-data";
// import { FavoritesContext } from "../store/context/favorites-context";

function FavoritesScreen() {
  // const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    // favoriteMealsCtx.ids.includes(meal.id)
    favoriteMealIds.includes(meal.id)
  );
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}> You have no favorites yet.</Text>
      </View>
    );
  }
  return <MealList items={favoriteMeals} />;
}
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
});
export default FavoritesScreen;
