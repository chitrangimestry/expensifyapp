import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {categoryColors, colors} from '../themes';

interface itemsProps {
  id: number;
  title: string;
  amount: number;
  category: 'food' | 'commute' | 'shopping' | 'entertainment' | 'other';
}

const ExpenseCard = ({item}: {item: itemsProps}) => {
  return (
    <View
      style={[
        styles.cardContainer,
        {
          backgroundColor:
            categoryColors[item.category],
        },
      ]}>
      <View>
        <Text style={[{color: colors.heading}, styles.titleText]}>
          {item.title}
        </Text>
        <Text>{item.category}</Text>
      </View>
      <View>
        <Text>${item.amount}</Text>
      </View>
    </View>
  );
};

export default ExpenseCard;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  titleText: {
    fontWeight: 'bold',
  },
  categoryText: {
    color: 'gray',
    fontWeight: 'semibold',
    fontSize: 12,
  },
});
