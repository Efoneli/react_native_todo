import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const FooterIcons = () => {
  return (
    <View style={styles.bottomContent}>
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
  );
};

export default FooterIcons;

const styles = StyleSheet.create({
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
