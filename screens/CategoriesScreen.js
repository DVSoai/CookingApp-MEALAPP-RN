import React from "react";
import { FlatList } from "react-native";
import CategoryGridTitle from "../components/CategoryGridTitle";
import { CATEGORIES } from "../data/Dummy-data";

function renderCategoryItems({ item }) {
  function pressHandler() {}
  return (
    <CategoryGridTitle
      title={item.title}
      color={item.color}
      onPress={pressHandler}
    />
  );
}
function CategoriesScreen({ navigation }) {
  function renderCategoryItems({ item }) {
    function pressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: item.id,
      });
    }
    return (
      <CategoryGridTitle
        title={item.title}
        color={item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItems}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
