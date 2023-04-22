import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { sizes, spacing, shadow } from '../styles/theme';
const DATA = [
  {
    id: 1,
    title: 'Modern JS: A curated collection'
  },
  {
    id: 2,
    title: 'JavaScript notes for professionals'
  },
  {
    id: 3,
    title: 'JavaScript: The Good Parts'
  },
  {
    id: 4,
    title: 'JavaScript: The right way'
  },
  {
    id: 5,
    title: 'Exploring ES6'
  },
  {
    id: 11,
    title: 'JavaScript: The Good Parts'
  },
  {
    id: 12,
    title: 'JavaScript: The right way'
  },
  {
    id: 13,
    title: 'Exploring ES6'
  },
  {
    id: 14,
    title: 'JavaScript: The Good Parts'
  },
  {
    id: 15,
    title: 'JavaScript: The right way'
  },
  {
    id: 21,
    title: 'Exploring ES6'
  },
  {
    id: 22,
    title: 'JavaScript: The Good Parts'
  },
  {
    id: 23,
    title: 'JavaScript: The right way'
  },
  {
    id: 24,
    title: 'Exploring ES6'
  },
  {
    id: 25,
    title: 'JavaScript: The Good Parts'
  },
  {
    id: 31,
    title: 'JavaScript: The right way'
  },
  {
    id: 32,
    title: 'Exploring ES6'
  },
  {
    id: 33,
    title: 'JavaScript: The Good Parts'
  },
  {
    id: 44,
    title: 'JavaScript: The right way'
  },
  {
    id: 55,
    title: 'Exploring ES6'
  }
];

interface javascript {
  id: number;
  title: string;
}

const SearchSuggestions: React.FC = () => {
  return (
    <View style={styles.suggestionContainer}>
      {DATA.map((item, idx) => (
        <>
          <Text style={styles.itemView} key={item.id}>
            {item.title}
          </Text>
          <View style={styles.itemSeperator}></View>
        </>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  suggestionContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderColor: 'gray',
    width: "100%",
    flex: 1
  },
  itemView: {
    fontSize: sizes.radius,
    padding: spacing.m
  },
  itemSeperator: {
    height: 0.5,
    width: '100%',
    backgroundColor: '#C8C8C8',
  }
})

export default SearchSuggestions;