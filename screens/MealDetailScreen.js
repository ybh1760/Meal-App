import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { MEALS } from "../data/dummy-data";
import DefaultText from "../components/atoms/DefaultText";
import HeaderButton from "../components/atoms/HeaderButton";

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam("mealId");

  const meal = MEALS.find(meal => meal.id === mealId);

  return (
    <ScrollView>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <View style={styles.detail}>
        <DefaultText>{meal.duration}m</DefaultText>
        <DefaultText>{meal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{meal.affordability.toUpperCase()}</DefaultText>
      </View>
    </ScrollView>
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
  image: {
    width: "100%",
    height: 200
  },
  detail: {
    flexDirection: "row",
    padding: 10,
    marginVertical: 10,
    justifyContent: "space-around"
  }
});

export default MealDetailScreen;
