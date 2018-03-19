package com.splashtest;

//import android.graphics.Color;
//import android.os.Bundle;

import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen;
import android.os.Bundle;
// import com.facebook.react.ReactInstanceManager;
// import com.facebook.react.bridge.ReactContext;
// import com.mehcode.reactnative.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);
        super.onCreate(savedInstanceState);
    }

    // @Override
    // protected void onCreate(Bundle savedInstanceState) {
    //   SplashScreen.show(this, getReactInstanceManager());
    //   super.onCreate(savedInstanceState);
    // }

    @Override
    protected String getMainComponentName() {
        return "SplashTest";
    }
}
