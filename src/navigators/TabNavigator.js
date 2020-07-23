import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import { MainStackNavigator, ContactStackNavigator, GroupStackNavigator, MoreStackNavigator, TimelineStackNavigator } from "./StackNavigator";
import GroupScr from '../screens/GroupScreen';
import TimelineScr from '../screens/TimelineScreen';
import MoreScr from '../screens/MoreScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Messages") {
            iconName = focused ? 'ios-chatbubbles' : 'ios-chatbubbles';
          } else if (route.name === 'Contact') {
            iconName = focused ? 'ios-contact' : 'ios-contact';
          } else if (route.name === 'Group') {
            iconName = focused ? 'ios-contacts' : 'ios-contacts';
          } else if (route.name === 'Timeline') {
            iconName = focused ? 'ios-book' : 'ios-book';
          } else if (route.name === 'More') {
            iconName = focused ? 'ios-more' : 'ios-more';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Messages" component={MainStackNavigator} />
      <Tab.Screen name="Contact" component={ContactStackNavigator} />
      <Tab.Screen name="Group" component={GroupStackNavigator} />
      <Tab.Screen name="Timeline" component={TimelineStackNavigator} />
      <Tab.Screen name="More" component={MoreStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;