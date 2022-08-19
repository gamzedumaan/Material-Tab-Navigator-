import {Text, View, tabBarIcon} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreens from './screens/HomeScreens';
import SearchScreen from './screens/SearchScreen';
import AddScreen from './screens/AddScreen';
import ActivityScreen from './screens/ActivityScreen';
import ProfileScreen from './screens/ProfileScreen';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/Entypo';
import Icon4 from 'react-native-vector-icons/Feather';
import Icon5 from 'react-native-vector-icons/AntDesign';

function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerTitle: 'Test',
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#FF869E',
            height: 60,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreens}
          options={{
            tabBarIcon: () => <Icon1 name="home" size={24} color="black" />,
          }}
        />
        <Tab.Screen
          name="Screen"
          component={SearchScreen}
          options={{
            tabBarIcon: () => (
              <Icon2 name="resize-full-screen" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Add"
          component={AddScreen}
          options={{
            tabBarIcon: () => (
              <Icon3 name="add-to-list" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Activity"
          component={ActivityScreen}
          options={{
            tabBarIcon: () => <Icon4 name="activity" size={24} color="black" />,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: () => <Icon5 name="profile" size={24} color="black" />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
