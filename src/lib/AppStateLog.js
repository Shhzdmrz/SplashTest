import React, { Component } from 'react';
import { AppState } from 'react-native';

class AppStateLog extends Component {
  state = {
    appState: AppState.currentState
  }

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = (nextAppState) => {
    this.setState({appState: nextAppState});
    console.log(nextAppState);
  }

  render() {
    return ( null );
  }
}

export default AppStateLog;