import React from 'react';
import { Easing } from 'react-native';
import { createDrawerNavigator,createAppContainer } from 'react-navigation'
import { Container } from 'native-base';
import Index from './src/screens/HomeScreen';
import Profile from './src/screens/Profile';
import SelectionCostOfGood from './src/screens/SelectionCostOfGood';
import SetCategories from './src/screens/SetCategories';

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps

      const thisSceneIndex = scene.index
      const width = layout.initWidth

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [width, 0],
      })

      return { transform: [ { translateX } ] }
    },
  }
}

const MyDrawerNavigator = createDrawerNavigator({
  'Новый портрет':{
    screen: Index,
  },
  SetCategories: {
    screen: SetCategories,
  },
  SelectionCostOfGood: {
    screen: SelectionCostOfGood,
  },
  Profile: {
    screen: Profile,
  }
}, {
  initialRouteName: 'Новый портрет',
  transitionConfig,
});

const MyApp = createAppContainer(MyDrawerNavigator);

class App extends React.PureComponent{
  render(){
    return(
      <Container>
        <MyApp />
      </Container>
    );
  }
}//End of App class

export default App;