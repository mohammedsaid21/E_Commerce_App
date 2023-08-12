import {
  BottomTabDescriptorMap,
  BottomTabNavigationEventMap,
} from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import {
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
} from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Keyboard, TouchableOpacity, View } from "react-native";
import { FeedTab, HomeTab, SettingsTab } from "./tabBarItems";
import { hwrosh, wwrosw } from "../constants/Layout";

interface TabBarProps {
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

const MyTabBar = ({ state, descriptors, navigation }: TabBarProps) => {
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const keyboardDidShow = () => setKeyboardStatus(true);
  const keyboardDidHide = () => setKeyboardStatus(false);
  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", keyboardDidHide);
  }, []);

  return (
    <View
      style={[
        {
          display: keyboardStatus ? "none" : "flex",
          flexDirection: "row",
          overflow: "hidden",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          height: hwrosh(93 - 34),
        },
      ]}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            // navigation.navigate({ name: route.name, merge: true });
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            accessibilityHint={label.toString()}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              alignItems: "center",
              alignContent: "center",
              justifyContent: "center",
              width: wwrosw(58),
              height: hwrosh(58),
            }}
            key={label.toString()}
          >
            {label == "Home" ? (
              <HomeTab key={label} {...{ label, isFocused }} />
            ) : label == "Feed" ? (
              <FeedTab key={label} {...{ label, isFocused }} />
            ) : label == "Settings" ? (
              <SettingsTab key={label} {...{ label, isFocused }} />
            ) : null}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default MyTabBar;
