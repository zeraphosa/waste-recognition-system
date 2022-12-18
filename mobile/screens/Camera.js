import {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
// const style = StyleSheet.create({
//   shadow: {
//     shadowColor: '#1E5128',
//     shadowOffset: {
//       width: 0,
//       height: 10,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.5,
//     elevation: 5,
//   },
// });

export default function Camera({navigation}) {
  const [data, set_data] = useState([{}]);
  useEffect(() => {
    fetch('/members')
      .then(res => res.json())
      .then(data => {
        set_data(data);
      });
  }, []);

  return (
    <View style={{...style.color_style, height: '100%', width: '100%'}}>
      <Text style={{...style.color_style}}>Take photo of trash</Text>
      <View>
        <Text style={{...style.color_style}}>AA</Text>
        {typeof data.members === 'undefined' ? (
          <Text style={{...style.color_style}}>Loading...</Text>
        ) : (
          data.members.map((item, idx) => (
            <Text key={idx} style={{...style.color_style}}>
              {item}
            </Text>
          ))
        )}
      </View>
      <Button title="Click" onPress={() => alert('Clicked')} />
    </View>
  );
}

const style = StyleSheet.create({
  color_style: {
    backgroundColor: '#121212',
    color: '#cccccc',
  },
});
