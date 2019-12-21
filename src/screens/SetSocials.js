import { Button } from "native-base";
import React from 'react';
import { View, Text } from 'react-native';

class SetSocials extends React.PureComponent {
  render() {
    return (
      <View style={{ marginTop:100,marginLeft:100}}>
        <Button onPress={() => this.props.navigation.goBack()} >
          <Text>Go back home</Text>
        </Button>
      </View>
    );
  }
}

export default SetSocials;