import React from "react";
import { Platform, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";
import Colors from "../constants/Colors";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "white"
  },
  headerTitleStyle: { fontFamily: "open-sans-bold" },
  headerBackTitleStyle: { fontFamily: "open-sans" },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary
};

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen
  },
  {
    // initialRouteName:"Categories", default로 첫번째 라우트를 홈으로 생각한다. 굳이 안적어도 된다.
    defaultNavigationOptions: defaultNavOptions
  }
);
const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
  },
  {
    defaultNavigationOptions: defaultNavOptions
  }
);
const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen
  },
  {
    defaultNavigationOptions: defaultNavOptions
  }
);
const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: tabinfo => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabinfo.tintColor} />
        );
      },
      tabBarColor: Colors.primary,
      tabBarLabel: Platform.OS === "android" && (
        <Text style={{ fontFamily: "open-sans-bold" }}>Meals</Text>
      )
    }
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: tabinfo => {
        return <Ionicons name="ios-star" size={25} color={tabinfo.tintColor} />;
      },
      tabBarColor: Colors.accent,
      tabBarLabel: Platform.OS === "android" && (
        <Text style={{ fontFamily: "open-sans-bold" }}>Favorites</Text>
      )
    }
  }
};

const MealsFavTabNavigator =
  Platform.OS == "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: "white",
        shifting: true
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accent,
          labelStyle: { fontFamily: "open-sans" }
        }
      });

const MainNavigator = createDrawerNavigator(
  {
    MealFav: {
      screen: MealsFavTabNavigator,
      navigationOptions: { drawerLabel: "Meal" }
    },
    Filters: FiltersNavigator
  },
  {
    contentOptions: {
      activeTintColor: Colors.accent,
      labelStyle: {
        fontFamily: "open-sans"
      }
    }
  }
);
export default createAppContainer(MainNavigator);
