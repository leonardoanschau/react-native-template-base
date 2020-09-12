import React from 'react';
import {Text} from 'react-native';
import styles from './HomeStyle';

const HomeComponent = () => {
  return (
    <>
      <Text style={[styles.container, styles.text]}>
        Welcome to the home page from template
      </Text>
    </>
  );
};

export default HomeComponent;
