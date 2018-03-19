import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import SplashScreen from 'react-native-splash-screen';

import { AppWithNavigationState } from './src/config/NavigationState';
import storeConfigure from './src/config/store';
import PushController from './src/lib/PushController';
import AppStateLog from './src/lib/AppStateLog';

const { store, persistor } = storeConfigure();

const onBeforeLift = () => {
}

export default class App extends Component {
  componentDidMount(){
    SplashScreen.hide();
    //persistor.purge();
  }

  render() {
      return (
        <Provider store={store}>
          <PersistGate 
              loading={<ActivityIndicator color="blue" size={60} />}
              onBeforeLift={onBeforeLift()}
              persistor={persistor}>
              <View style={styles.container}>
                <AppWithNavigationState style={{ backgroundColor: '#437F82' }} />
                <PushController />
                <AppStateLog />
            </View>
          </PersistGate>
        </Provider>
      ); 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
});