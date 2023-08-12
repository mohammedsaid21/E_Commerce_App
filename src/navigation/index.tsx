/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { SafeAreaView, View } from "react-native";
import { RootStackParamList, RootTabParamList } from "../types";
import MyTabBar from "./MyTabBar";
import HomeScreen from "../screens/HomeScreen";
import AuthenticationStack from "./AuthenticatedStack.tsx/AuthStack";
export default function Navigation() {
  //change this state to switch between Auth Stack and Home
  const [loginToken] = React.useState(false);

  return (
    <NavigationContainer>
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        {loginToken ? <RootNavigator /> : <AuthNavigator />}
      </SafeAreaView>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AuthenticationStack"
        component={AuthenticationStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => {
        return (
          <View
            style={{
              backgroundColor: "#EEE",
            }}
          >
            <MyTabBar {...props} />
          </View>
        );
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={() => ({
          title: "Home",
        })}
      />
    </BottomTab.Navigator>
  );
}
