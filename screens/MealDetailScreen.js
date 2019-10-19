import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { MEALS } from "../data/dummy-data";
import HeaderButton from "../components/atoms/HeaderButton";

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam("mealId");

  const meal = MEALS.find(meal => meal.id === mealId);

  return (
    <View style={styles.screen}>
      <Text>MealDetailScreen</Text>
      <Text>{meal.title}</Text>
      <Button
        title="Go to Main"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

MealDetailScreen.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam("mealId");

  const meal = MEALS.find(meal => meal.id === mealId);

  return {
    headerTitle: meal.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="favorite" iconName="ios-star" onPress={() => {}} />
      </HeaderButtons>
    )
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

export default MealDetailScreen;
