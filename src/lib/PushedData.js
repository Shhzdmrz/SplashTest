import React, { Component } from 'react';

class PushedData extends Component{
    componentWillMount(){        
        this.unmountPushData();
    }

    unmountPushData = () => {
        this.props.handleControllerLauncher();
    }
    
    render(){
        return null;
    }
}

export default PushedData;