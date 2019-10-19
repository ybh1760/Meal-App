import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/atoms/HeaderButton";
import FilterSwitch from "../components/molecules/FilterSwitch";

const FiltersScreen = props => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label="Gluten-Free"
        state={isGlutenFree}
        onChange={newValue => {
          setIsGlutenFree(newValue);
        }}
      />
      <FilterSwitch
        label="Lactose-Free"
        state={isLactoseFree}
        onChange={newValue => {
          setIsLactoseFree(newValue);
        }}
      />
      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChange={newValue => {
          setIsVegan(newValue);
        }}
      />
      <FilterSwitch
        label="Vegetarian"
        state={isVegetarian}
        onChange={newValue => {
          setIsVegetarian(newValue);
        }}
      />
    </View>
  );
};

FiltersScreen.navigationOptions = navData => {
  return {
    headerTitle: "Filters Screen",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff"
  },
  title: {
    margin: 10,
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center"
  }
});

export default FiltersScreen;
