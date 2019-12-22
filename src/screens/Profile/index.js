import React, { PureComponent } from 'react';
import { View, StyleSheet, Text, Image, ScrollView, FlatList } from 'react-native';
import CategoryItem from '../SetCategories/categoryItem';
import People from './images/people.png';
import Back from './images/back.png';

const data = [{"Лимончик":"https:\vk.com\public160510400",
  "Laser B.":"https:\vk.com\public28038996",
  "Martadello":"https:\vk.com\public142582865",
  "MDK":"https:\vk.com\public57846937",
  "Смейся до слёз :D":"https:\vk.com\public26419239",
  "ЁП":"https:\vk.com\public12382740",
  "Фабрика идей":"https:\vk.com\public43772432",
  "ИДЕИ для творчества":"https:\vk.com\public68229174",
  "Арт Бот":"https:\vk.com\public147720339",
  "Удачные Гифки :3":"https:\vk.com\public42510378",
  "DreamWorkss":"https:\vk.com\public60957092",
  "Аниме":"https:\vk.com\public47",
  "Под микроскопом":"https:\vk.com\public131956558",
  "Paintings Gallery":"https:\vk.com\public103153295",
  "СЛАВЯНЕ | Язычество | РУСЬ":"https:\vk.com\public31828606",
  "Я в шоке!":"https:\vk.com\public28761941",
  "Больше, чем фото":"https:\vk.com\public27725748",
  "Лучшие фотографы и модели | Искусство":"https:\vk.com\public5880263",
  "Дизайн & Декор":"https:\vk.com\public51696572",
  "Правда жизни":"https:\vk.com\public88851361",
  "Factura — арт блог":"https:\vk.com\public25817269"
}];

const sex = [{"Мужчины":53.21,"Женщины":46.78}];
const cities = ["Москва", "Санкт-Петербург","Тюмень","Челябинск","Новосибирск"];
const age = [{"0-18":36.89,"19-35":56.14,"36-50":1.06,"50+":5.88}];
const categories = ["Artist","Humor","Creative work","Animation","Public page","Photography","Design"];

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  container: {
    marginBottom: 40,
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
    width: 300,
  },
  header: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  field: {
    paddingHorizontal: 16,
  },
  fieldTitleText:{
    fontSize: 18,
  },
  fieldValueText:{
    paddingTop: 16,
    paddingLeft: 16,
    fontSize: 14,
  }
});

type Props = {
}

class Profile extends PureComponent<Props> {
  static navigationOptions = {
    drawerLabel: () => null
  };

  render() {
    console.log('data', Object.values(data[0]));
    console.log('data', Object.keys(data[0]));
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Image
            source={People}
            style={{width: 100, height: 100, borderRadius: 150}}
          />
          <Text style={styles.title}>
            Портрет вашей аудитории!
          </Text>
        </View>
        <View>
          <View style={styles.field}>
            <Text style={styles.fieldTitleText}>
              Соотношение мужчин и женщин:
            </Text>
            <Text style={styles.fieldValueText}>
              {Object.keys(sex[0]).map((item, index) => (
                  `${item} : ${Object.values(sex[0])[index]} %\n\n`
                ))
              }
            </Text>
          </View>
          <View style={styles.field}>
            <Text style={styles.fieldTitleText}>
              Возраст:
            </Text>
            <Text style={styles.fieldValueText}>
              {Object.keys(age[0]).map((item, index) => (
                  `${item} : ${Object.values(age[0])[index]} %\n\n`
                ))
              }
            </Text>
          </View>
          <View style={styles.field}>
            <Text style={styles.fieldTitleText}>
              Начните поиск своей аудитории здесь:
            </Text>
            <View style={{padding: 4, flexDirection: 'row', flexWrap:'wrap'}}>
              {Object.keys(data[0]).map((item, index) => {
                return (
                    <Text style={{padding: 4, textDecorationLine: 'underline', color:'#0f7bda'}}>
                      {item}
                    </Text>
                );
              })}
            </View>
          </View>
        </View>
        <View style={[styles.field, {marginBottom: 16}]}>
          <Text style={styles.fieldTitleText}>
            Большая часть вашей аудитории проживает в этих городах:
          </Text>
          {cities.map((item) => (
            <Text style={styles.fieldValueText}>
            {item}
            </Text>
          ))}
        </View>
        <View style={styles.field}>
          <Text style={styles.fieldTitleText}>
            Акцентируйте свое внимание на следующие категории:
          </Text>
          <FlatList
            style={[styles.flatList, {marginTop: 16}]}
            keyExtractor={index => index.toString()}
            horizontal
            alwaysBounceHorizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            renderItem={({ item, index }) => {
              return (
                <CategoryItem item={item} index={index} locked />
              )
            }}
          />

        </View>
      </ScrollView>
    );
  }
}

export default Profile;