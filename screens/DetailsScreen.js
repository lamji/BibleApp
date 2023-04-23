import * as React from 'react';
import { View, Text , Button} from 'react-native';
import { Header } from 'react-native-elements';

const DetailsScreen = ({route, navigation}) => {
  /* 2. Get the param */
  const { itemId, otherParam } = route.params;

  // using icon button in header
  const [count, setCount] = React.useState(0);

  /**
   * Handles the set counts
   */
  React.useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount((c) => c + 1)} title="update" />
      ),
    });
  }, [navigation]);
  return (
    <View >
      <View>
      <Header
        containerStyle={{ backgroundColor: '#3b5998' }}
        leftComponent={{ icon: 'menu', color: '#fff', onPress: () => navigation.toggleDrawer() }}
        centerComponent={{ text: 'Facebook', style: { color: '#fff', fontSize: 20 } }}
        rightComponent={{ icon: 'search', color: '#fff', onPress: () => console.log('search') }}
      />
      <Text>Home Screen</Text>
    </View>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      {/* Navigate to another screen */}
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />

      {/* Go back */}
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Text>Count: {count}</Text>
    </View>
  );
}


export default DetailsScreen