import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback
} from "react-native";

const CategoryGridTable = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.gridItem}>
      <TouchableCmp onPress={props.onSelect}>
        <View style={{ ...styles.meal, backgroundColor: props.color }}>
          <Text>{props.title}</Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: "hidden"
  },
  meal: {
    flex: 1,
    borderRadius: 10,
    elevation: 5,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end"
  }
});

export default CategoryGridTable;
