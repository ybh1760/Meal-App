import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";

import Colors from "../constants/Colors";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen
  },
  {
    // initialRouteName:"Categories", default로 첫번째 라우트를 홈으로 생각한다. 굳이 안적어도 된다.
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "white"
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primary
    }
  }
);

const MealsFavTabNavigator = createBottomTabNavigator({
  meals: MealsNavigator,
  favorites: FavoritesScreen
});

export default createAppContainer(MealsFavTabNavigator);
