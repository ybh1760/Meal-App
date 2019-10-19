import React from "react";
import { StyleSheet, View, Switch, Platform } from "react-native";

import DefaultText from "../atoms/DefaultText";
import Colors from "../../constants/Colors";

const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
      <DefaultText>{props.label}</DefaultText>
      <Switch
        value={props.state}
        trackColor={{ true: Colors.primary }}
        thumbColor={Platform.OS === "android" ? Colors.primary : ""}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20
  }
});

export default FilterSwitch;
