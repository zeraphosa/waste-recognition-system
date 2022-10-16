import {Text, View} from 'react-native';

export default function Map({navigation}) {
  return (
    <View>
      <Text>Map</Text>
      <Button title="Click" onPress={() => alert('Clicked')} />
    </View>
  );
}
