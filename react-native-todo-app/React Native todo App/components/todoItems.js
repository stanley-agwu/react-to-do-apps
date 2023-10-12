import React from 'react'
import {StyleSheet, TouchableOpacity, Text, View, TouchableHighlight} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TodoItem({ pressHandler, item }) {
  return (
    <TouchableHighlight>
      <View style={styles.item}>
        <View style={styles.itemText}>
          <Text multiline style={styles.itemText}>{item.text}</Text>
        </View>
        <View style={styles.itemIcon}>
        <TouchableOpacity onPress={() => pressHandler(item.key)} >
          <MaterialCommunityIcons name="delete-forever" size={24} 
            color="#333333" />
        </TouchableOpacity>
        </View>
      </View>
    </TouchableHighlight>
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