import * as React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = ({ route, navigation }) => {
  // Get params
  const { itemId } = route.params;
  return (
    <View >
      <Text>Home Screen</Text>

      <Text>id: {JSON.stringify(itemId)}</Text>
      {/* Navigate to another screen */}
      <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          /* 2. Go to details to see how you can get the params */
          navigation.navigate("Details", {
            itemId: 86,
            otherParam: "anything you want here",
          });
        }}
      />

      {/* Update params */}
      <Button
        title="Update params"
        onPress={() => {
          /* 1. Updating params*/
          navigation.setParams({
            itemId: Math.floor(Math.random() * 100), // itemId is the name of the initial params in app.js
          });
        }}
      />

      <Button
        title="Go to Profile"
        onPress={() =>
          navigation.navigate("Profile", { name: "Custom profile header" })
        }
      />
    </View>
  );
};

export default HomeScreen;
