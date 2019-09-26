import React from "react";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./src/screens/HomeScreen";
import DetailScreen from "./src/screens/DetailScreen";
import SettingScreen from "./src/screens/SettingScreen";
import BoardCreateScreen from "./src/screens/BoardCreateScreen";
import BoardEditScreen from "./src/screens/BoardEditScreen";

const defaultNavigationOptions = {
  headerTintColor: "white",
  tabBarOptions: {
    activeTintColor: "tomato",
    inactiveTintColor: "gray",

    labelStyle: {
      fontSize: 16
    }
  }
};

const StackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Detail: {
    screen: DetailScreen
  },
  Create: {
    screen: BoardCreateScreen
  },
  Edit: {
    screen: BoardEditScreen
  }
});

StackNavigator.navigationOptions = ({ navigation }) => {
  return {
    title: "홈",
    tabBarIcon: <Ionicons name={"ios-home"} size={20} color="#ff6666" />
  };
};

const SettingStack = createStackNavigator(
  {
    Setting: {
      screen: SettingScreen
    }
  },
  defaultNavigationOptions
);
SettingStack.navigationOptions = {
  title: "환경설정",
  tabBarIcon: <Ionicons name={"ios-settings"} size={20} color="#ff6666" />
};

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      // screen: HomeScreen,
      screen: StackNavigator,
      navigationOptions: {
        title: "홈"
      }
    },
    Setting: {
      screen: SettingStack
    }
  },
  {
    defaultNavigationOptions
  }
);

const AppContainer = createAppContainer(TabNavigator);

export default function App() {
  return <AppContainer />;
}
