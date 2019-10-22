import React from "react";
import { useSelector } from "react-redux";

import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/molecules/MealList";

const CategoryMealsScreen = props => {
  const catId = props.navigation.getParam("categoryId");
  const availableMeals = useSelector(state => state.meals.meals);
  const displayMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealList listData={displayMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title
  };
};

export default CategoryMealsScreen;
