import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Home from '../screens/Home';
import Camera from '../screens/Camera';
import Docs from '../screens/Docs';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#0c0c0c',
          borderRadius: 15,
          height: 90,
          ...style.shadow
        },
      }}>
      <Tab.Screen name="Home" component={Home} 
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Text>T</Text>
            </View>
          )
        }}
      ></Tab.Screen>
      <Tab.Screen name="Camera" component={Camera}></Tab.Screen>
      <Tab.Screen name="Docs" component={Docs}></Tab.Screen>
    </Tab.Navigator>
  );
}

const style = StyleSheet.create({
  shadow: {
    shadowColor: '#1E5128',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
