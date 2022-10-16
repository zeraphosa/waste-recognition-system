import {Text, View} from 'react-native';

export default function Home({navigation}) {
  return (
    <View>
      <Text>Home</Text>
      <Button title="Click" onPress={() => alert('Clicked')} />
    </View>
  );
}
