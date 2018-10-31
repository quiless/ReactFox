/** @format */

import {AppRegistry} from 'react-native';
import Loading from './src/pages/loading/loading';
import Login from './src/pages/login/login';
import Chat from './src/pages/chat/chat';
import Gallery from './src/pages/gallery/gallery'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Chat);
