import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTable from "../components/molecules/CategoryGridTable";

const CategoriesScreen = props => {
  const renderGridItem = itemData => {
    return (
      <CategoryGridTable
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() =>
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: { categoryId: itemData.item.id }
          })
        }
      />
    );
  };
  return (
    <FlatList
      keyExtractor={item => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Meals Categories"
};

const styles = StyleSheet.create({});

export default CategoriesScreen;
