import {Image, StyleSheet, Text, View} from 'react-native';

export default function Home() {
  return (
    <View
      style={{
        ...style.colors,
        ...style.container,
        height: '100%',
        width: '100%',
      }}>
      <View>
        <Text style={{...style.colors, ...style.content}}>Content</Text>
      </View>
      <View>
        <Text style={{...style.colors, ...style.content}}>Input</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  colors: {
    backgroundColor: '#121212',
    color: '#CCCCCC',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    height: '50%',
  },
});
