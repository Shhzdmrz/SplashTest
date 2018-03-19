import { Platform, Dimensions } from 'react-native';

const window = Dimensions.get('window');
const DeviceInfo = {
    deviceWidth: window.width,
    deviceHeight: window.height,
    deviceFontScale: window.fontScale,
    deviceOS: Platform.OS,
    deviceAspect_Ratio: window.width / window.height,
};

export default DeviceInfo;