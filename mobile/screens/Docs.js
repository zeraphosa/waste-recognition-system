import {Text, View} from 'react-native';

export default function Docs({navigation}) {
  return (
    <View>
      <Text>Docs</Text>
      <Button title="Click" onPress={() => alert('Clicked')} />
    </View>
  );
}
