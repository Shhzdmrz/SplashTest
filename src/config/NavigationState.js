import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BackHandler } from 'react-native';
import {
  NavigationActions, 
  addNavigationHelpers
} from 'react-navigation';
import { connect } from 'react-redux';
import AppNavigator from './AppNavigation';
import { addListener } from './reduxNav';

class AppWithNavigationState extends Component {
    static propTypes = {
      dispatch: PropTypes.func.isRequired,
      nav: PropTypes.object.isRequired,
    };

    componentDidMount() {
      BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    }
  
    componentWillUnmount() {
      BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }
  
    onBackPress = () => {
      const { dispatch, nav } = this.props;
      if (nav.index === 0) {
        return false;
      }
      dispatch(NavigationActions.back());
      return true;
    }

    render(){
      const { dispatch, nav } = this.props;
      const navigation = addNavigationHelpers({
        dispatch,
        state: nav,
        addListener,
      });
        return(
          <AppNavigator 
            navigation={navigation}
          />
        );
    }
}
  
const mapStateToProps = ({ nav }) => ({ nav });
const connectAppWithNavigationState = connect(mapStateToProps)(AppWithNavigationState);
export { 
    connectAppWithNavigationState as AppWithNavigationState, AppNavigator
};