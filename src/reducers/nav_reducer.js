import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../config/NavigationState';

const initialState = AppNavigator.router.getStateForAction(NavigationActions.init());

export default (state = initialState, action) => {
    const nextState = AppNavigator.router.getStateForAction(action, state);
    return nextState || state;
};