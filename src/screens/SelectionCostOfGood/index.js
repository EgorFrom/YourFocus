import React, { PureComponent } from 'react';
import { View, ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Profile from '../Profile';
import Bubble from './images/bubble.png';

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  image: {
    width: 150,
    height: 150,
    justifyContent:'center',
    alignItems:'center',
    marginLeft: 50,
  },
  response: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: -50,
    marginTop: 100,
  },
  title: {
    fontFamily: 'Roboto-Regular',
    padding: 16,
    fontSize: 28,
    textAlign: 'center',
    marginTop: 50,
  }
});

type Props = {
}

class SelectionCostOfGood extends PureComponent<Props> {
  static navigationOptions = {
    drawerLabel: () => null
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Вас интересует только платежеспособная аудитория?
        </Text>
       <View style={styles.response}>
         <ImageBackground
           style={styles.image}
           source={Bubble}
           resizeMode={'contain'}
           blurRadius={2}
         >
           <TouchableOpacity
             style={{padding: 30}}
             onPress={() => this.props.navigation.navigate('Profile')}
           >
             <Text style={{color: '#fff', fontWeight: '700', fontSize:18, fontFamily: 'Roboto-Regular'}}>
               Да
             </Text>
           </TouchableOpacity>
         </ImageBackground>
         <ImageBackground
           style={styles.image}
           source={Bubble}
           resizeMode={'contain'}
           blurRadius={2}
         >
           <TouchableOpacity
             style={{padding: 30, justifyContent: 'center', alignItems: 'center'}}
             onPress={() => this.props.navigation.navigate('Profile')}
           >
             <Text style={{color: '#fff', fontWeight: '700', fontSize:18, fontFamily: 'Roboto-Regular'}}>
               Нет
             </Text>
           </TouchableOpacity>
         </ImageBackground>
       </View>
      </View>
    );
  }
}

export default SelectionCostOfGood;