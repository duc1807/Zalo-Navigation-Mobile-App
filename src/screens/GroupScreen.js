import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { greaterOrEq } from "react-native-reanimated";

const GroupScr = () => {
  return (
    <View style={styles.center}>
      <Text>This is the group screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default GroupScr;