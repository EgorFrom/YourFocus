import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import InputWithIcon from '../../components/InputWithIcon';
import burger from '../headerImages/burger.png';
import logo from './images/logo.png';
import vk from './images/VK.png';
import inst from './images/Inst.png'
import fb from './images/Fb.png'
import buttonBackground from './images/backgroundBottom.png'

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
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
  image: {
    width: 250,
    height: 80,
    margin: 16,
    marginBottom: 40,
  },
  button: {
    flex: 1,
    minWidth: 200,
    minHeight: 50,
    marginTop: 40,
  },
  nextStep: {
    position: 'absolute',
    color: '#fff',
    fontWeight: '900',
    fontSize: 26,
    marginLeft: 73,
    marginTop: 20,
  }
});

class Index extends React.PureComponent {
  render() {
    return (
      <View style={styles.flex1}>
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
        <KeyboardAwareScrollView
          style={{padding: 5, flex: 1}}
          key={'buyerShowScrollView'}
          extraScrollHeight={56}
          keyboardShouldPersistTaps={'handled'}
        >
          <View style={styles.container}>
            <Image
              source={logo}
              style={styles.image}
              resizeMode={'contain'}
            />
            <InputWithIcon image={vk} placeholder={'Ссылка на группу'} />
            <InputWithIcon image={inst} placeholder={'@nickname'} />
            <InputWithIcon image={fb} placeholder={'Ссылка '} />
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Image
                style={[styles.flex1, {width: 220, height: 80 }]}
                source={buttonBackground}
                resizeMode={'contain'}
              />
              <Text style={styles.nextStep}>Далее</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

export default Index;