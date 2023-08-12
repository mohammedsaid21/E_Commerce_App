import { StyleProp, ViewStyle } from "react-native";

export const tabContainerStyle: StyleProp<ViewStyle> = {
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  width: 70,
};

export const tabColor = (isFocused: boolean) => {
  return isFocused ? "blue" : "grey";
};

export const tabTextStyle = (isFocused: boolean) => {
  return { color: isFocused ? "#5184E5" : "white", fontSize: 12 };
};
