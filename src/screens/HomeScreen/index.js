import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Burger from '../../components/Burger';
import InputWithIcon from '../../components/InputWithIcon';
import SetCategories from '../SetCategories';
import vk from './images/VK.png';
import inst from './images/Inst.png';
import fb from './images/Fb.png';
import buttonBackground from './images/backgroundBottom.png';
import logo from './images/logo.png';

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
    fontFamily: 'Roboto-Regular',
    position: 'absolute',
    color: '#fff',
    fontWeight: '900',
    fontSize: 26,
    marginLeft: 73,
    marginTop: 20,
  }
});

class Index extends React.PureComponent {
  static navigationOptions = {
    drawerLabel: () => (
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', padding: 8}}>
          <Image
            style={{width: 50, height: 50, borderRadius: 360}}
            source={{uri: 'https://sun9-52.userapi.com/c855416/v855416199/175fa/ckD4aIT38ZU.jpg'}}
            resizeMode={'contain'}/>
          <Text style={{fontSize: 20, marginLeft: 16}}>Новый портрет</Text>
      </View>
    )
  };

  render() {
    return (
      <View style={styles.flex1}>
        <Burger {...this.props} />
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
              resizeMode={'contain'}/>
            <InputWithIcon image={vk} placeholder={'Ссылка на группу'} />
            <InputWithIcon image={inst} placeholder={'@nickname'} />
            <InputWithIcon image={fb} placeholder={'Ссылка '} />
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('SetCategories')}
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