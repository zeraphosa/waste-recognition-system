import {Button, Text, View} from 'react-native';

export default function Camera({navigation}) {
  return (
    <View>
      <Text>Camera</Text>
      <Button title="Click" onPress={() => alert('Clicked')} />
    </View>
  );
}
