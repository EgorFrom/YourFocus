import React from 'react';
import { Animated, View, Text, ImageBackground, StyleSheet, Easing, FlatList, TouchableOpacity, Dimensions, Image } from 'react-native';
import banner from '../HomeScreen/images/backgroundBottom.png';
import CategoryItem from './categoryItem';
import nextArrow from './images/arrow-next.png';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  banner: {
    width: 280,
    minHeight: 160,
    maxHeight: 160,
    padding: 16,
    paddingTop: 100,
    marginBottom: 150,
  },
  bannerText: {
    fontFamily: 'Roboto-Regular',
    color: '#0f7bda',
    fontWeight: '600',
    fontSize: 20,
  },
  flatList: {
    maxWidth: width,
  },
  bannerContainer: {
    marginLeft: 70,
  },
  scrollContainer: {
    marginLeft: -width/2,
    paddingTop: 50,
  },
  firstScroll: {
    paddingLeft: 60,
    marginBottom: 10,
  },
  secondScroll: {
    marginBottom: 10,
  },
  thirdScroll: {
    paddingLeft: 60,
  },
  nextButton: {
    width: 50,
    height: 50,
    position:'absolute',
    bottom: 100,
    left: width / 2 - 25,
    zIndex: 2,
  },
  nextButtonImage: {
    width: 50,
    height: 50,
  },
});

class SetCategories extends React.PureComponent {
  static navigationOptions = {
    drawerLabel: () => null
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      visible: false,
      visibleNextButton: false,
    };
    this.firstScroll = ['Путешествия', 'Машины', 'Здоровье', 'Дети до 3-ех лет', 'Спорт', 'Мода', 'Стоматология'];
    this.secondScroll = ['Альпинизм', 'Маникюр', 'Массаж', 'Беременность', 'Юность', 'Конная езда', 'Stand Up'];
    this.thirdScroll = ['Философия', 'Наука', 'Образование', 'Обучение за рубежом', 'Онлайн-курсы', 'Тьюторство'];

    this.bannerTopPosition = new Animated.Value(0);
    this.firstScrollPosition = new Animated.Value(0);
  }

  upBannerPosition = (visible) => {
    console.log('visible', visible);
    Animated.timing(this.bannerTopPosition, {
      easing: Easing.linear,
      toValue: visible ? -200 : 100,
      duration: 500,
      useNativeDriver: true,
    }).start(() => this.setState({visible}));
  };

  upBanner = () => this.upBannerPosition(true);

  rightScrollPosition = (visible) => {
    console.log('visible', visible);
    Animated.timing(this.firstScrollPosition, {
      easing: Easing.linear,
      toValue: visible ? 1 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      this.setState({visible});
    });
  };

  firstScrollFromRight = () => this.rightScrollPosition(true);

  scrollCategories = (elements, style, inverted) => (
    <FlatList
      style={[styles.flatList, style]}
      keyExtractor={(item, index) => `${item}_${index}`}
      inverted={inverted}
      horizontal
      alwaysBounceHorizontal
      showsHorizontalScrollIndicator={false}
      data={elements}
      renderItem={({ item, index }) => {
        return (
          <CategoryItem key={`${index}_${item}`} item={item} index={index} locked={false}/>
        )
      }}
    />
  );

  render() {
    const { visible, visibleNextButton } = this.state;
    const bannerTop = {
      transform: [
        { translateY: this.bannerTopPosition },
      ],
    };

    const firstScrollRight = {
       opacity: this.firstScrollPosition,
    };

    setTimeout(this.upBanner, 500);
    setTimeout(this.firstScrollFromRight, 1000);
    setTimeout(() => this.setState({ visibleNextButton: true }), 3000);

    return (
      <View style={styles.container}>
        <View style={styles.flex1}>
          <Animated.View style={[bannerTop, styles.bannerContainer]}>
            <View style={styles.banner}>
              <Text style={styles.bannerText}>Мы начали искать вашу аудиторию. Выберете подходящие категории - это нам поможет.</Text>
            </View>
          </Animated.View>
        </View>
        <View style={styles.flex1}>
          <Animated.View style={[firstScrollRight, styles.scrollContainer]}>
            {visible ?  [
              this.scrollCategories(this.firstScroll, styles.firstScroll, false),
              this.scrollCategories(this.secondScroll, styles.secondScroll,true),
              this.scrollCategories(this.thirdScroll, styles.thirdScroll,false),
            ]: null}
          </Animated.View>
        </View>
        {visibleNextButton ? (
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => this.props.navigation.navigate('SelectionCostOfGood')}
          >
            <Image source={nextArrow} style={styles.nextButtonImage}/>
          </TouchableOpacity>
        ) : null }
      </View>
    );
  }
}

export default SetCategories;
