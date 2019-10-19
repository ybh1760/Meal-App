import React from "react";
import { StyleSheet, View } from "react-native";

import DefaultText from "./DefaultText";
const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 5,
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1
  }
});

export default ListItem;
