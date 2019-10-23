import React from "react";
import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/molecules/MealList";
import DefaultText from "../components/atoms/DefaultText";

const CategoryMealsScreen = props => {
  const catId = props.navigation.getParam("categoryId");
  const availableMeals = useSelector(state => state.meals.filteredMeals);
  const displayMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );
  if (displayMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals found, Maybe check Filters !!!</DefaultText>
      </View>
    );
  }
  return <MealList listData={displayMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default CategoryMealsScreen;
