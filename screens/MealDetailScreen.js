import React, { useCallback, useEffect } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import { toggleFavorite } from "../store/actions/meals";
import DefaultText from "../components/atoms/DefaultText";
import HeaderButton from "../components/atoms/HeaderButton";
import ListItem from "../components/molecules/ListItem";

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam("mealId");
  const availableMeals = useSelector(state => state.meals.meals);
  const meal = availableMeals.find(meal => meal.id === mealId);
  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [mealId]);

  useEffect(() => {
    props.navigation.setParams({
      toggleFav: toggleFavoriteHandler
    });
  }, [toggleFavoriteHandler]);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Image source={{ uri: meal.imageUrl }} style={styles.image} />
        <View style={styles.detail}>
          <DefaultText>{meal.duration}m</DefaultText>
          <DefaultText>{meal.complexity.toUpperCase()}</DefaultText>
          <DefaultText>{meal.affordability.toUpperCase()}</DefaultText>
        </View>
        <Text style={styles.title}>Ingredients</Text>
        {meal.ingredients.map(ingredient => (
          <ListItem key={ingredient}>{ingredient}</ListItem>
        ))}

        <Text style={styles.title}>Steps</Text>
        {meal.steps.map(step => (
          <ListItem key={step}>{step}</ListItem>
        ))}
      </ScrollView>
    </View>
  );
};

MealDetailScreen.navigationOptions = navigationData => {
  const title = navigationData.navigation.getParam("title");
  const toggleFavorite = navigationData.navigation.getParam("toggleFav");
  return {
    headerTitle: title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="favorite"
          iconName="ios-star"
          onPress={() => {
            toggleFavorite();
          }}
        />
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
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center"
  }
});

export default MealDetailScreen;
