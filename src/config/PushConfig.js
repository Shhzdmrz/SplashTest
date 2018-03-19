import PushNotification from 'react-native-push-notification';
import { Platform } from 'react-native';

const NotificationsHelper = {
    sendPushNotification: (notification) => {
        if(Platform.OS === 'android'){
            PushNotification.localNotification(notification);
        } else if (Platform.OS === 'ios'){
            PushNotification.localNotification({           
                /* iOS only properties */
                //alertAction: // (optional) default: view
                //category: // (optional) default: null
                //userInfo: // (optional) default: null (object containing additional notification data)
            
                /* iOS and Android properties */
                title: "My Notification Title", // (optional, for iOS this is only used in apple watch, the title will be the app name on other iOS devices)
                message: "My Notification Message", // (required)
                playSound: false, // (optional) default: true
                soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
                number: '10', // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
                repeatType: 'day', // (Android only) Repeating interval. Could be one of `week`, `day`, `hour`, `minute, `time`. If specified as time, it should be accompanied by one more parameter 'repeatTime` which should the number of milliseconds between each interval
                actions: '["Yes", "No"]',  // (Android only) See the doc for notification actions to know more
            })
        }
    }
}

export default NotificationsHelper;