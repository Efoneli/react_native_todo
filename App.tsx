import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';
import TodoList from './TodoList';

type Todo = {
  id: number;
  text: string;
  done: boolean;
};

const App = () => {
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [todoText, setTodoText] = useState<string>('');

  const addTodo = () => {
    if (todoText.trim() !== '') {
      setTodos([...todos, {id: Date.now(), text: todoText, done: false}]);
      setTodoText('');
    }
  };

  const deleteTodo = (id: number) => {
    const updateTodos = todos.filter(todo => todo.id !== id);
    setTodos(updateTodos);
  };

  const markAsDone = (id: number) => {
    const updateTodos = todos.map(todo => {
      if (todo.id === id) {
        return {...todo, done: true};
      }
      return todo;
    });
    setTodos(updateTodos);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List App</Text>
      <Text style={styles.todoTitle}>My Todo</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter You Todo here..."
          value={todoText}
          onChangeText={text => setTodoText(text)}
        />
        <Button title="Add" onPress={addTodo} />
      </View>
      <TodoList todos={todos} deleteTodo={deleteTodo} markAsDone={markAsDone} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#c593c4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#a44c84',
  },
  todoTitle: {
    color: '#b11e5c',
    marginBottom: 20,
    fontSize: 18,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
});

export default App;
