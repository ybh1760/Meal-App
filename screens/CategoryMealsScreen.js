import React from "react";
import { StyleSheet, Text, View, Button, Platform } from "react-native";

import Colors from "../constants/Colors";
import { CATEGORIES } from "../data/dummy-data";

const CategoryMealsScreen = props => {
  const catId = props.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  return (
    <View style={styles.screen}>
      <Text>CategoryMealsScreen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Go to Details"
        onPress={() => props.navigation.navigate({ routeName: "MealDetail" })}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primary : "white"
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primary
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default CategoryMealsScreen;
