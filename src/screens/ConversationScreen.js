import React from "react";
import { Image, Text, ScrollView, StyleSheet, View } from "react-native";

export default function ConversationScreen({route}) {
  const { avt, name, content } = route.params;

  return (
    <View style={styles.contentContainer}>
      <Image
        source={{ uri: avt }}
        style={{
          width: 200,
          height: 200
        }}
      />
      <Text style={{fontWeight: '700'}}>{name}</Text>
      <Text>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center"
  }
});