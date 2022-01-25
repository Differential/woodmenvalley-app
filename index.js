import Bugsnag from "@bugsnag/react-native";
Bugsnag.start();

import Bugsnag from '@bugsnag/react-native';

import './loadConfig';
import { AppRegistry } from 'react-native';

Bugsnag.start();
Bugsnag.notify(new Error('Test error'));

const App = require('./src').default;

AppRegistry.registerComponent('WoodmenValley', () => App);
