import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Home from '../screens/Home';
import Camera from '../screens/Camera';
import Docs from '../screens/Docs';

const Tab = createBottomTabNavigator();
function CustomTabBarButton({children, onPress}) {
  return (
    <TouchableOpacity
      style={{
        top: -35,
        justifyContent: 'center',
        alignItems: 'center',
        ...style.shadow,
      }}
      onPress={onPress}>
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: '#1E5128',
        }}>
        {children}
      </View>
    </TouchableOpacity>
  );
}
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
          backgroundColor: '#000000',
          borderRadius: 15,
          height: 90,
          ...style.shadow,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/icons/home.png')}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 35,
                  tintColor: focused ? '#1E5128' : '#ffffff',
                }}
              />
            </View>
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Camera"
        component={Camera}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icons/camera.png')}
              resizeMode="contain"
              style={{
                width: 35,
                height: 35,
                tintColor: '#ffffff',
              }}
            />
          ),
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}></Tab.Screen>
      <Tab.Screen
        name="Docs"
        component={Docs}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/icons/docs.png')}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 35,
                  tintColor: focused ? '#1E5128' : '#ffffff',
                }}
              />
            </View>
          ),
        }}></Tab.Screen>
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
