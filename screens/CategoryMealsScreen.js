import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoryMealsScreen = props => {
  const catId = props.navigation.getParam("categoryId");

  const displayMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );
  const renderMealItem = itemData => {
    return (
      <View>
        <Text>{itemData.item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayMeals}
        renderItem={renderMealItem}
        keyExtractor={(item, index) => item.id}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  }
});

export default CategoryMealsScreen;
