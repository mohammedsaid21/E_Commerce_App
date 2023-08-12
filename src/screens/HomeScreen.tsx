import { Text, View } from "react-native";
import React from "react";
import { RootTabParamList } from "../types";
import { StackScreenProps } from "@react-navigation/stack";

type Props = StackScreenProps<RootTabParamList, "Home">;
const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home</Text>
    </View>
  );
};

export default HomeScreen;
