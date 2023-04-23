import * as React from "react";
import { Text, View, TouchableOpacity, Button } from "react-native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";


export default function MyTabBar({ state, descriptors, navigation }) {
  const labels = [
    {
      name: "Home",
      iconName: "home",
      icon: <AntDesign name="home" size={27} color="black" />,
    },
    {
      name: "Center",
      iconName: "bible",
      icon: (
        <View
          style={{
            marginTop: -36,
            backgroundColor: "#f4511e",
            padding: 20,
            borderRadius: 50,
            alignItems: "center",
          }}
        >
          <FontAwesome5 name="bible" size={27} color="white" />
        </View>
      ),
    },
    {
      name: "Settings",
      iconName: "setting",
      icon: <AntDesign name="setting" size={27} color="black" />,
    },
  ];
  return (
    <View style={{ flexDirection: "row" }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
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
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
            key={index}
          >
            <View style={{ padding: 10, alignItems: "center"}}>
              {index === 1 ? (
                <View style={{ alignItems: "center" }}>
                  <View
                    style={{
                      marginTop: -36,
                      backgroundColor: "#f4511e",
                      padding: 20,
                      borderRadius: 50,
                      alignItems: "center",
         
           
                    }}
                  >
                    <FontAwesome5 name="bible" size={27} color="white" />
                  </View>
                  <Text>Bible</Text>
                </View>
              ) : (
                <AntDesign
                  name={labels[index].iconName}
                  size={27}
                  color= { isFocused ? "#f4511e": "black"}
                />
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}


