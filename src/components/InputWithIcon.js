import React, { PureComponent } from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';

const inputWidth = 240;

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  container: {
    minWidth: inputWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
    minWidth: inputWidth,
    height: 60,
    fontSize: 20,
  },
  image: {
    width: 35,
    height: 35,
  },
});

type Props = {
  image: Object,
  placeholder: String,
}

class InputWithIcon extends PureComponent<Props> {
  render() {
    const { image, placeholder } = this.props;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={() => {}}
          placeholder={placeholder}
        />
        <Image
          style={styles.image}
          source={image}
          resizeMode={'contain'}
        />
      </View>
    );
  }
}

export default InputWithIcon;