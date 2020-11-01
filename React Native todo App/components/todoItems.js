import React from 'react'
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TodoItem({ pressHandler, item }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)} >
      <View style={styles.item}>
        <View style={styles.itemText}>
          <Text multiline style={styles.itemText}>{item.text}</Text>
        </View>
        <View style={styles.itemIcon}>
          <MaterialCommunityIcons name="delete-forever" size={24} 
            color="#333333" />
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    flexDirection: 'row',
  },
  itemText:{
    width: 250,
  },
  itemIcon:{
    marginLeft: 20,
  }
});