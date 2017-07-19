// @flow

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'antd-mobile';

export default class TestView extends React.Component {
  static navigationOptions = {
    title: 'Home'
  }

  _gotoTests = () => {
    this.props.navigation.navigate('Tests');
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onClick={this._gotoTests}
        >
          Go to test view
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
