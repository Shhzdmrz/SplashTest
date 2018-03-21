# SplashTest
React Native splash test repo to figure out the issue with react navigation.


# Installation

1. clone the repo
2. run `yarn install` inside the repo
3. start app `react-native run-android`

## Generate Issue

1. Open app and click on notify button(it will generate the local notification)
2. Click on the notification and you'll see the splash showing again and screen again mounted which you can clearly see on back button press.

## Solution
To resolve this issue changing the **launch mode for Main Activity** 
See **AndroidManifest.xml** `android:launchMode="singleTask"`. As react navigation is handled by Main Activity so I added launchMode as singleTask to avoid launching same activity again.

For the full screen splash I used `SplashScreen.show(this, true);` in the main activity where first parameter is referring to activity instance and second parameter is referring to fullscreen flag to show splash on fullscreen and this is not documented in the react-native-splash-screen repo. 
