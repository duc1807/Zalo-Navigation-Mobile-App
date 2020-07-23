import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MessagesStack from "../screens/Home";
import GroupScr from "../screens/GroupScreen";
import Contact from "../screens/Contact";
import TimelineScr from '../screens/TimelineScreen';
import MoreScr from '../screens/MoreScreen';
import ConversationScreen from "../screens/ConversationScreen";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Messages" component={MessagesStack} />
      <Stack.Screen name="Group" component={GroupScr} />
      <Stack.Screen name="Conversation" component={ConversationScreen} />
    </Stack.Navigator>
  );
}

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
}

const GroupStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Group" component={GroupScr} />
    </Stack.Navigator>
  );
}

const MoreStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="More" component={MoreScr} />
    </Stack.Navigator>
  );
}

const TimelineStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Timeline" component={TimelineScr} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator, ContactStackNavigator, GroupStackNavigator, MoreStackNavigator, TimelineStackNavigator };