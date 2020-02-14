import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomePage} from '../pages/home/HomePage';
import {ApplicationPage} from '../pages/application/ApplicationPage';
import {MyPage} from '../pages/my/MyPage';
import {DiscoverPage} from '../pages/discover/DiscoverPage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {C1Page} from '../pages/my/C1Page';
import {NavigationContainer} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
        options={{
          tabBarIcon: () => <AntDesign name="home" size={25} />,
        }}
      />
      <Tab.Screen
        name="应用"
        component={ApplicationStackScreen}
        options={{
          tabBarIcon: () => <AntDesign name="appstore-o" size={25} />,
        }}
      />
      <Tab.Screen
        name="发现"
        component={DiscoverStackScreen}
        options={{
          tabBarIcon: () => <AntDesign name="eyeo" size={25} />,
        }}
      />
      <Tab.Screen
        name="我的"
        component={MyStackScreen}
        options={{
          tabBarIcon: () => <AntDesign name="user" size={25} />,
        }}
      />
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
