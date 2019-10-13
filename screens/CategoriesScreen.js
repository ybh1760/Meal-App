import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Platform,
  TouchableOpacity
} from "react-native";

import Colors from "../constants/Colors";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = props => {
  const renderGridItem = itemData => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() =>
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: { categoryId: itemData.item.id }
          })
        }
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
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
  headerTitle: "Meals Categories",
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "white"
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  }
});

export default CategoriesScreen;
