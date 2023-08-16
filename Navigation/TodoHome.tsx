import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import TodoList from './TodoList';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
      <View style={styles.navIcons}>
        <View style={styles.icons}>
          <AntDesign name="bars" style={{fontSize: 30}} />
          <AntDesign name="inbox" style={{fontSize: 30}} />
        </View>
        <View>
          <Text style={styles.headings}>ALL TASKS</Text>
        </View>
        <View style={styles.icons}>
          <Ionicons name="book-outline" style={{fontSize: 30}} />
          <Ionicons name="ellipsis-horizontal-circle" style={{fontSize: 30}} />
        </View>
      </View>
      <Text style={styles.headings}>Today</Text>
      <View style={styles.icons}>
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          markAsDone={markAsDone}
        />
      </View>
      <View style={styles.bottomContent}>
        {/* <Calendar /> */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="I want to..."
            value={todoText}
            onChangeText={text => setTodoText(text)}
          />
          <AntDesign
            onPress={addTodo}
            name="pluscircle"
            style={{color: 'green', fontSize: 50, paddingTop: 10}}
          />
        </View>
        <View style={styles.footerIcons}>
          <View>
            <AntDesign name="checkcircle" style={{fontSize: 30}} />
            <Text>Tasks</Text>
          </View>
          <View>
            <AntDesign name="bars" style={{fontSize: 30}} />
            <Text>calender</Text>
          </View>
          <View>
            <AntDesign name="setting" style={{fontSize: 30}} />
            <Text>Settings</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: '#fff',
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
  headings: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    padding: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    paddingVertical: 2,
    borderColor: 'grey',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 50,
    paddingLeft: 20,
    fontSize: 20,
    color: 'gray',
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 6,
  },
  navIcons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    paddingTop: 20,
  },
  footerIcons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 6,
    paddingBottom: 20,
  },
  bottomContent: {
    flex: 1,
    position: 'absolute',
    flexDirection: 'column',
    width: 390,
    bottom: 0,
  },
});

export default App;
