import { View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { tabContainerStyle, tabColor } from "./styles";
import { circularRatio } from "../../constants/Layout";

type Props = {
  isFocused: boolean;
  label: string;
};

const FeedTab = (props: Props) => {
  return (
    <View style={tabContainerStyle}>
      <MaterialCommunityIcons
        disabled
        name="newspaper-variant"
        size={circularRatio(37)}

        color={tabColor(props.isFocused)}
      />
      {/* <TabText isFocused={props.isFocused} /> */}
    </View>
  );
};

export { FeedTab };
