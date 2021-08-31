/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from '~/App';
import Onboarding from '~/Onboarding';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Onboarding);
