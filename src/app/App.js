import React, {useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import fontSize from '../constants/FontSize';
import Api from '../middleware/Api';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6086FF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: fontSize.xLarge,
    textAlign: 'center',
  },
});

const App = () => {
  useEffect(() => {
    requestExample();
  }, []);
  return (
    <>
      <View style={[styles.container]}>
        <Text style={[styles.text]}>Welcome to the Anschau template</Text>
      </View>
    </>
  );
};

export default App;

function requestExample() {
  Api.get('todos/1')
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
}
