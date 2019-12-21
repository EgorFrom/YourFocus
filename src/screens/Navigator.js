import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import Index from './HomeScreen';
import SetSocials from './SetSocials';

const AppNavigator = createStackNavigator(
{
  Home: Index,
  Details: SetSocials,
},
{
  initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);