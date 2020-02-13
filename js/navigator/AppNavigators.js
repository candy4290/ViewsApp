import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomePage} from '../pages/home/HomePage';
import {ApplicationPage} from '../pages/application/ApplicationPage';
import {MyPage} from '../pages/my/MyPage';
import {DiscoverPage} from '../pages/discover/DiscoverPage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {C1Page} from '../pages/my/C1Page';
import {NavigationContainer} from '@react-navigation/native';
// import {MaterialCommunityIcons} from 'react-native-vector-icons/MaterialCommunityIcons';

export const rootCom = 'Init'; //设置根路由，对应RootNavigator中第一个初始化的路由名

const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomePage}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
}

const ApplicationStack = createStackNavigator();
function ApplicationStackScreen() {
  return (
    <ApplicationStack.Navigator>
      <ApplicationStack.Screen
        name="Application"
        component={ApplicationPage}
        options={{headerShown: false}}
      />
    </ApplicationStack.Navigator>
  );
}

const DiscoverStack = createStackNavigator();
function DiscoverStackScreen() {
  return (
    <DiscoverStack.Navigator>
      <DiscoverStack.Screen
        name="Discover"
        component={DiscoverPage}
        options={{headerShown: false}}
      />
    </DiscoverStack.Navigator>
  );
}

const MyStack = createStackNavigator();
function MyStackScreen() {
  return (
    <MyStack.Navigator>
      <MyStack.Screen
        name="My"
        component={MyPage}
        options={{headerShown: false}}
      />
      <MyStack.Screen
        name="C1"
        component={C1Page}
        options={{headerShown: false}}
      />
    </MyStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName={rootCom}
      tabBarOptions={{
        inactiveTintColor: '#000',
        activeTintColor: '#BB9246',
        showIcon: true,
      }}>
      <Tab.Screen
        name="首页"
        component={HomeStackScreen}
        // options={{
        //   tabBarIcon: ({color, size}) => (
        //     <MaterialCommunityIcons name="home" color={color} size={size} />
        //   ),
        // }}
      />
      <Tab.Screen name="应用" component={ApplicationStackScreen} />
      <Tab.Screen name="发现" component={DiscoverStackScreen} />
      <Tab.Screen name="我的" component={MyStackScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigators() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
