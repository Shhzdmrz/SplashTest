import React, { Component } from 'react';
import PushNotification from 'react-native-push-notification';
import PushedData from './PushedData';

class PushController extends Component{
    state = { controllerLaunched: true };
    componentDidMount(){
        PushNotification.configure({
            onNotification: (notification) => {
                const clicked = notification.userInteraction;
                if (clicked) {
                    this.setState({ controllerLaunched: false});
                }
            },
        });
    }

    updateControllerLauncher = () => {
        this.setState({ controllerLaunched: true });
    }

    render (){
        if(this.state.controllerLaunched){
            return null;
        } else {
            return <PushedData handleControllerLauncher={this.updateControllerLauncher} />;
        }
    }
}

export default PushController;