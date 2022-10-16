import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Camera from '../screens/Camera';
import Docs from '../screens/Docs';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}></Tab.Screen>
      <Tab.Screen name="Camera" component={Camera}></Tab.Screen>
      <Tab.Screen name="Docs" component={Docs}></Tab.Screen>
    </Tab.Navigator>
  );
}
