import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/molecules/MealItem";

const CategoryMealsScreen = props => {
  const catId = props.navigation.getParam("categoryId");

  const displayMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );

  const renderMealItem = itemData => {
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: { mealId: itemData.item.id }
          });
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayMeals}
        renderItem={renderMealItem}
        keyExtractor={(item, index) => item.id}
        style={{ width: "100%" }}
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
