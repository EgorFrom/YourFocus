import React, { PureComponent } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import burger from '../screens/headerImages/burger.png';

const inputWidth = 240;

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  burger: {
    width: 50,
    height: 50,
    margin: 16,
  },
  burgerContainer: {
    width: 75,
    height: 75,
  },
});

type Props = {
}

class Burger extends PureComponent<Props> {
  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.burgerContainer}
          onPress={() => this.props.navigation.openDrawer()}
        >
          <Image
            style={styles.burger}
            source={burger}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Burger;