import { INCREMENT_VALUE, DECREMENT_VALUE, RESET_VALUE } from './types';
import PushConfig from '../config/PushConfig';

export const incrementValue = () => dispatch => {
    dispatch({ type: INCREMENT_VALUE });
}

export const decrementValue = () => dispatch => {
    dispatch({ type: DECREMENT_VALUE });
}

export const resetValue = () => dispatch => {
    dispatch({ type: RESET_VALUE });
}

export const notify = () => dispatch => {
    PushConfig.sendPushNotification({
        id: "12345786",
        autoCancel: true,
        vibrate: true,
        vibration: 1000,
        largeIcon: 'icon',
        smallIcon: 'icon',
        ticker:  "Splash Test",
        message: "Received",
        bigText: "Testing big text",
        subText: "Tap to get more info!",
        ongoing: false,
        soundName: 'default', 
    });
}