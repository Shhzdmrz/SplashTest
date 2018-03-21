import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { incrementValue, decrementValue, resetValue, notify } from '../actions';
class ScreenOne extends Component {
    state = { mounted: false };

    componentDidMount(){
        this.setState({ mounted: true });
        this._mounted = true;
        console.log("Screen One Mounted: " + this._mounted);        
    }

    componentWillUnmount() {
        this.setState({ mounted: false });
        this._mounted = false;
        console.log("Screen One Unmounted: " + this._mounted);        
      }

    render() {
        const { one, incrementValue, decrementValue, resetValue } = this.props;
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 30 }}>Counter</Text>
                <Text style={{ fontSize: 32}}>{one.values}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={{ justifyContent: 'center', width: 70, height: 50, borderColor: 'white', borderWidth: 2, backgroundColor: 'gray' }} onPress={() => incrementValue()}><Text style={{ color: 'white', fontSize: 20, textAlign: 'center'}}>Add</Text></TouchableOpacity>
                    <TouchableOpacity style={{ justifyContent: 'center', width: 70, height: 50, borderColor: 'white', borderWidth: 2, backgroundColor: 'gray'}} onPress={() => decrementValue()}><Text style={{ color: 'white', fontSize: 20, textAlign: 'center'}}>Delete</Text></TouchableOpacity>
                    <TouchableOpacity style={{ justifyContent: 'center', width: 70, height: 50, borderColor: 'white', borderWidth: 2, backgroundColor: 'gray' }} onPress={() => resetValue()}><Text style={{ color: 'white', fontSize: 20, textAlign: 'center'}}>Reset</Text></TouchableOpacity>
                    <TouchableOpacity style={{ justifyContent: 'center', width: 70, height: 50, borderColor: 'white', borderWidth: 2, backgroundColor: 'gray' }} onPress={notify()}><Text style={{ color: 'white', fontSize: 20, textAlign: 'center'}}>Notify</Text></TouchableOpacity>
                </View>
            </View>
        );
    }
}

const mapStateToProps = ({ one }) => ({ one })

export default connect(mapStateToProps, { incrementValue, decrementValue, resetValue, notify })(ScreenOne);