// import React from 'react';
// import {Text, View} from 'react-native';
// import {Icon, SearchBar, TabBar} from '@ant-design/react-native';
// import HomePage from './home/HomePage';
// import {MyPage} from './my/MyPage';
// import {DiscoverPage} from './discover/DiscoverPage';
// import {ApplicationPage} from './application/ApplicationPage';
// export default class BottomTabBars extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedTab: 'redTab',
//     };
//   }
//   renderContent(pageText) {
//     return (
//       <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
//         <SearchBar placeholder="Search" showCancelButton />
//         <Text style={{margin: 50}}>{pageText}</Text>
//       </View>
//     );
//   }
//   onChangeTab(tabName) {
//     this.setState({
//       selectedTab: tabName,
//     });
//   }
//   render() {
//     return (
//       <TabBar
//         unselectedTintColor="#949494"
//         tintColor="#33A3F4"
//         barTintColor="#f5f5f5">
//         <TabBar.Item
//           title="首页"
//           icon={<Icon name="home" />}
//           selected={this.state.selectedTab === 'blueTab'}
//           onPress={() => this.onChangeTab('blueTab')}>
//           <HomePage />
//         </TabBar.Item>
//         <TabBar.Item
//           icon={<Icon name="ordered-list" />}
//           title="应用"
//           selected={this.state.selectedTab === 'redTab'}
//           onPress={() => this.onChangeTab('redTab')}>
//           <ApplicationPage />
//         </TabBar.Item>
//         <TabBar.Item
//           icon={<Icon name="like" />}
//           title="发现"
//           selected={this.state.selectedTab === 'greenTab'}
//           onPress={() => this.onChangeTab('greenTab')}>
//           <DiscoverPage />
//         </TabBar.Item>
//         <TabBar.Item
//           icon={<Icon name="user" />}
//           title="我的"
//           selected={this.state.selectedTab === 'yellowTab'}
//           onPress={() => this.onChangeTab('yellowTab')}>
//           <MyPage />
//         </TabBar.Item>
//       </TabBar>
//     );
//   }
// }
