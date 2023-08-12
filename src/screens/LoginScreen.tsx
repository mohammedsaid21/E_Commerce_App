import { Button, View } from "react-native";
import React from "react";
import { RootTabParamList } from "../types";
import { StackScreenProps } from "@react-navigation/stack";

type Props = StackScreenProps<RootTabParamList, "Login">;

const LoginScreen = ({ navigation }: Props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button onPress={() => navigation.navigate("SignUp")} title="Sign Up" />
    </View>
  );
};

export default LoginScreen;
