import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from '../pages/home/HomePage';
import {ApplicationPage} from '../pages/application/ApplicationPage';
import {MyPage} from '../pages/my/MyPage';
import {DiscoverPage} from '../pages/discover/DiscoverPage';
import C1Page from '../pages/my/C1Page';
// import {LoginPage} from '../pages/user/login';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import { WelcomePage } from '../pages/welcome/WelcomePage';
import {connect} from 'react-redux';

export const rootCom = 'Init'; //设置根路由，对应RootNavigator中第一个初始化的路由名

/* 首页tab的stack */
const HomeStack = createStackNavigator();
/* 应用tab的stack */
const ApplicationStack = createStackNavigator();
/* 发现tab的stack */
const DiscoverStack = createStackNavigator();
/* 我的tab的stack */
const MyStack = createStackNavigator();
/* app底部tabs的stack */
const Tab = createBottomTabNavigator();
/* 根路由stack */
const RootStack = createStackNavigator();

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
  // <MyStack.Screen name="C1" component={C1Page} />
}

function HomeTabs() {
  // navigation.setOptions({headerTitle: getHeaderTitle(route)});
  return (
    <Tab.Navigator
      // eslint-disable-next-line no-shadow
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Application':
              iconName = 'appstore-o';
              break;
            case 'Discover':
              iconName = 'eyeo';
              break;
            case 'My':
              iconName = 'user';
              break;
          }
          return <AntDesign name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen
        name="Home"
        options={{tabBarLabel: '首页'}}
        component={HomeStackScreen}
      />
      <Tab.Screen
        name="Application"
        options={{tabBarLabel: '应用'}}
        component={ApplicationStackScreen}
      />
      <Tab.Screen
        name="Discover"
        options={{tabBarLabel: '发现'}}
        component={DiscoverStackScreen}
      />
      <Tab.Screen
        name="My"
        options={{tabBarLabel: '我的'}}
        component={MyStackScreen}
      />
    </Tab.Navigator>
  );
}

function AppNavigators(props) {
  return (
    <NavigationContainer
      theme={props.theme}
      tarbarVisible={props.tarbarVisible}>
      <RootStack.Navigator>
        <RootStack.Screen
          options={{headerShown: false}}
          name="Home"
          component={HomeTabs}
        />
        <RootStack.Screen
          options={{headerShown: false}}
          name="C1"
          component={C1Page}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps = state => ({
  theme: state.theme,
});
export default connect(mapStateToProps)(AppNavigators);
/**
 * 根据route动态获取对应的title名称
 */
// function getHeaderTitle(route) {
//   // Access the tab navigator's state using `route.state`
//   const routeName = route.state
//     ? // Get the currently active route name in the tab navigator
//       route.state.routes[route.state.index].name
//     : // If state doesn't exist, we need to default to `screen` param if available, or the initial screen
//       // In our case, it's "Feed" as that's the first screen inside the navigator
//       route.params?.screen || '首页';

//   return routeName;
// }
