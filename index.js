import { AppRegistry } from 'react-native';
import App from './App';
import { YellowBox } from "react-native";
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);
AppRegistry.registerComponent('Reckoner', () => App);
