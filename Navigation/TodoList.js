import React from 'react';
import {View, Text, Button, StyleSheet, FlatList} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const TodoList = ({todos, deleteTodo, markAsDone}) => {
  return (
    <FlatList
      data={todos}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <View style={styles.todoItem}>
          <Entypo
            onPress={() => markAsDone(item.id)}
            disabled={item.done}
            name="circle"
            style={{fontSize: 20, padding: 10}}
          />
          <Text style={item.done ? styles.doneText : styles.todoText}>
            {item.text}
          </Text>
          <FontAwesome
            name="times"
            onPress={() => deleteTodo(item.id)}
            style={{fontSize: 30, padding: 10}}
            color="brown"
          />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
  },
  todoText: {
    flex: 1,
    fontSize: 20,
    color: 'grey',
  },
  doneText: {
    flex: 1,
    fontSize: 16,
    textDecorationLine: 'line-through',
    color: 'green',
  },
});

export default TodoList;
