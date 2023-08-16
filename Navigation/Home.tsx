import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StackScreens} from './Stack/AllScreens';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type propsType = NativeStackScreenProps<StackScreens, 'Home'>;

function Home(props: propsType) {
  const {navigation} = props;
  const gotoTodoHome = () => {
    navigation.navigate('TodoHome');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Home</Text>
      <Button title="Go to Task" color="pink" onPress={gotoTodoHome} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Home;
