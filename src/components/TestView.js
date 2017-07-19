// @flow

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'antd-mobile';
import { Fingerprint } from 'expo';

export default class TestView extends React.Component {
  static navigationOptions = {
    title: 'Test View'
  }

  state = {
    fingerprintStatus: null,
  }

  _launchFingerprint = async () => {
    const hasFingerprint = await Fingerprint.hasHardwareAsync();

    if (!hasFingerprint) {
      alert('no fingerprint available.');
      return;
    }

    const { success } = await Fingerprint.authenticateAsync('test ask fingerprint');

    console.log('has>', hasFingerprint, 'test>', success);
    this.setState({ fingerprintStatus: success });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Here is a test view!</Text>
        <Text>Some other text.</Text>
        <Text>is this shit turned on?!</Text>

        <Button
          onClick={this._launchFingerprint}
        >
          {this.state.fingerprintStatus === true && '✅'}
          {this.state.fingerprintStatus === false && '❎'}
          Test Fingerprint
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
