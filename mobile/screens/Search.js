import {Button, Text, View} from 'react-native';

export default function Search({navigation}) {
  return (
    <View>
      <Text>Search</Text>
      <Button title="Click" onPress={() => alert('Clicked')} />
    </View>
  );
}
