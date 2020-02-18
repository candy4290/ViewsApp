import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from '../pages/home/HomePage';
import {ApplicationPage} from '../pages/application/ApplicationPage';
import {MyPage} from '../pages/my/MyPage';
import {DiscoverPage} from '../pages/discover/DiscoverPage';
import C1Page from '../pages/my/C1Page';
import LoginPage from '../pages/user/login';
import {ForgetPswPage} from '../pages/user/forget-psw';
import ChangePswPage from '../pages/user/change-psw';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import { WelcomePage } from '../pages/welcome/WelcomePage';
import {connect} from 'react-redux';

export const rootCom = 'Init'; //设置根路由，对应RootNavigator中第一个初始化的路由名

/* 除了tab页的其它页面 */
const ElseStack = createStackNavigator();
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

function ElseStackScreen() {
  return (
    <ElseStack.Navigator>
      <ElseStack.Screen
        options={{headerShown: false}}
        name="Login"
        component={LoginPage}
      />
      <ElseStack.Screen
        name="FogetPsw"
        component={ForgetPswPage}
        options={{headerShown: false}}
      />
      <ElseStack.Screen
        name="ChangePsw"
        component={ChangePswPage}
        options={{headerShown: false}}
      />
    </ElseStack.Navigator>
  );
}

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
      <MyStack.Screen name="C1" component={C1Page} />
    </MyStack.Navigator>
  );
}

function HomeTabs() {
  // navigation.setOptions({headerTitle: getHeaderTitle(route)});
  return (
    <Tab.Navigator
      backBehavior={'none'}
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

function AppNavigators({theme, isLogged}) {
  console.log(isLogged);
  return (
    <NavigationContainer theme={theme}>
      <RootStack.Navigator>
        {!isLogged ? (
          <RootStack.Screen
            options={{headerShown: false}}
            name="Else"
            component={ElseStackScreen}
          />
        ) : (
          <RootStack.Screen
            options={{headerShown: false}}
            name="Home"
            component={HomeTabs}
          />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps = state => ({
  theme: state.theme,
  isLogged: state.isLogged,
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
