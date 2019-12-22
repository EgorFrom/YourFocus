import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  itemCategory: {
    padding: 16,
    marginHorizontal: 8,
    borderWidth: 3,
    borderColor: '#1081d8',
    borderRadius: 40,
  },
  itemCategoryText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
  selected: {
    backgroundColor: '#0f7bda',
    borderColor: '#fff',
  },
  selectedText: {
    color: '#fff',
  }
});

type Props = {
  item: String,
  index: number,
  locked: boolean,
}

class CategoryItem extends PureComponent<Props> {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  render() {
    const { index, item, locked } = this.props;
    const { selected } = this.state;
    if (!locked) {
      return (
        <TouchableOpacity
          style={[styles.itemCategory, selected && styles.selected]}
          onPress={() => this.setState({selected: !selected})}
        >
          <Text style={[styles.itemCategoryText, selected && styles.selectedText]}>{item}</Text>
        </TouchableOpacity>
      );
    }
    return (
      <View style={[styles.itemCategory, selected && styles.selected]}>
        <Text style={[styles.itemCategoryText, selected && styles.selectedText]}>{item}</Text>
      </View>
    );
  }
}

export default CategoryItem;