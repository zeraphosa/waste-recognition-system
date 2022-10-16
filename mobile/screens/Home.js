import {Image, View} from 'react-native';

export default function Home() {
  return (
    <View style={{height: '100%', width: '100%'}}>
      <Image
        style={{height: '100%', width: '100%'}}
        source={require('../assets/home_empty.png')}
        resizeMode="cover"
      />
    </View>
  );
}
