import React from "react";
import { View, FlatList, Text, StyleSheet, ScrollView, SafeAreaView, Image } from "react-native";
import DATA from "../../assets/messages";
import { TouchableOpacity } from "react-native-gesture-handler";

const Item = (props) => (
  <TouchableOpacity 
    onPress={() => 
    props.navigation.navigate('Conversation', {
      avt: props.avt,
      name: props.name,
      content: props.content,
      })}>
    <View style={styles.messageContainer}>
      <View style={styles.messageLeft}>
        <Image source={{ uri: props.avt }} style={styles.avatar} />
      </View>
      <View style={styles.messageRight}>
        <View style={styles.messRightUp}>
          <Text style={{ fontWeight: '700' }}>{props.name}</Text>
          <Text>{props.time}</Text>
        </View>
        <View style={styles.messRightDown}>
          <Text>{props.content}</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

const MessagesStack = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <Item
      id={item.id}
      avt={item.avatar_url}
      name={item.first_name}
      time={item.last_message_date}
      content={item.last_message_content}
      navigation={navigation} />
  );

  return (
    <View style={styles.center}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}/>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    backgroundColor: '#e0e0e0'
  },
  messageContainer: {
    height: 100,
    width: 100 + '%',
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: 'white'
  },
  messageLeft: {
    flex: 0.25,
    alignItems: "center",
    justifyContent: 'center'
  },
  messageRight: {
    flex: 0.75,
    flexDirection: 'column',
    paddingRight: 10,
  },
  avatar: {
    width: 85,
    height: 85,
    borderRadius: 50,
    borderWidth: 1,
  },
  messRightUp: {
    flex: 0.32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center"
  },
  messRightDown: {
    flex: 0.68,
  }
});

export default MessagesStack;
