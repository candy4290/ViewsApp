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
import {MyTheme} from '../theme/theme';

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
    </MyStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;
          switch (route.name) {
            case '首页':
              iconName = 'home';
              break;
            case '应用':
              iconName = 'appstore-o';
              break;
            case '发现':
              iconName = 'eyeo';
              break;
            case '我的':
              iconName = 'user';
              break;
          }
          return <AntDesign name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="首页" component={HomeStackScreen} />
      <Tab.Screen name="应用" component={ApplicationStackScreen} />
      <Tab.Screen name="发现" component={DiscoverStackScreen} />
      <Tab.Screen name="我的" component={MyStackScreen} />
    </Tab.Navigator>
  );
}

const RootStack = createStackNavigator();

export default function AppNavigators() {
  return (
    <NavigationContainer theme={MyTheme}>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={HomeTabs} />
        <RootStack.Screen name="C1" component={C1Page} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
