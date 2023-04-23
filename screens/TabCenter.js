import * as React from "react";
import { Text, View, Button, StyleSheet, ScrollView } from "react-native";
import { styles } from "../styles/useBibleStyles";

export default function CenterScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Bible</Text>
      </View>
    </ScrollView>
  );
}

