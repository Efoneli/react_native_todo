import React from 'react';
import {View, Text, Button, StyleSheet, FlatList} from 'react-native';

const TodoList = ({todos, deleteTodo, markAsDone}) => {
  return (
    <FlatList
      data={todos}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <View style={styles.todoItem}>
          <Text style={item.done ? styles.doneText : styles.todoText}>
            {item.text}
          </Text>
          <Button
            title="Done"
            onPress={() => markAsDone(item.id)}
            disabled={item.done}
          />
          <Button title="Delete" onPress={() => deleteTodo(item.id)} />
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
    borderBottomWidth: 1,
    borderColor: '#ccc',
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
  deleteButton: {
    color: 'red',
    backgroundColor: 'red',
  },
  saveButton: {
    backgroundColor: 'green',
  },
});

export default TodoList;