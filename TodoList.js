import React from 'react';
import {View, Text, Button, StyleSheet, FlatList} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const TodoList = ({todos, deleteTodo, markAsDone}) => {
  return (
    <FlatList
      data={todos}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <View style={styles.todoItem}>
          <Entypo name="circle" style={{fontSize: 20, padding: 10,}} />
          <Text style={item.done ? styles.doneText : styles.todoText}>
            {item.text}
          </Text>
          <Button
            title="Done"
            onPress={() => markAsDone(item.id)}
            disabled={item.done}
            color="green"
          />
          <Button
            title="Delete"
            onPress={() => deleteTodo(item.id)}
            color="#8e2e43"
          />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  todoText: {
    flex: 1,
    fontSize: 16,
  },
  doneText: {
    flex: 1,
    fontSize: 16,
    textDecorationLine: 'line-through',
    color: 'green',
  },
});

export default TodoList;
