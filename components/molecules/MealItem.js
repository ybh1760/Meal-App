import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground
} from "react-native";

import DefaultText from "../atoms/DefaultText";

const MealItem = props => {
  const { title, duration, complexity, affordability, image, onSelect } = props;
  return (
    <View style={styles.mealContainer}>
      <TouchableOpacity onPress={onSelect}>
        <View style={{ ...styles.mealRow, ...styles.header }}>
          <ImageBackground style={styles.backImg} source={{ uri: image }}>
            <View style={styles.titleContainer}>
              <Text style={styles.title} numberOfLines={1}>
                {title}
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{ ...styles.mealRow, ...styles.detail }}>
          <DefaultText>{duration}m</DefaultText>
          <DefaultText>{complexity.toUpperCase()}</DefaultText>
          <DefaultText>{affordability.toUpperCase()}</DefaultText>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealContainer: {
    backgroundColor: "#f5f5f5",
    width: "95%",
    height: 200,
    borderRadius: 10,
    overflow: "hidden",
    alignSelf: "center",
    marginVertical: 10
  },
  backImg: { width: "100%", height: "100%", justifyContent: "flex-end" },
  mealRow: {
    flexDirection: "row"
  },
  header: { height: "85%" },
  detail: {
    height: "15%",
    justifyContent: "space-between",
    alignItems: "center"
  },
  titleContainer: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  title: {
    fontSize: 20,
    color: "white",
    textAlign: "center"
  }
});

export default MealItem;
