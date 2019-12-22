import { DrawerNavigator } from "react-navigation";
import drawerContent from './drawerContent';
// import { createStackNavigator } from 'react-navigation-stack';
import Index from './HomeScreen';
import SetSocials from './SetSocials';

const AppNavigator = DrawerNavigator(
{
  Home: { screen: Index },
  SetSocials: { screen: SetSocials },
},
{
  initialRouteName: 'Home',
  contentComponent: drawerContent
});

export default AppNavigator;