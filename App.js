import React from 'react';
import { createDrawerNavigator,createAppContainer } from 'react-navigation'
import { Container } from 'native-base';
import Index from './src/screens/HomeScreen';
import SetSocials from './src/screens/SetSocials';

const MyDrawerNavigator = createDrawerNavigator({
  Home:{
    screen: Index,
  },
  Notifications: {
    screen: SetSocials,
  },
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