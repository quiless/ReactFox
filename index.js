/** @format */

import { AppRegistry } from 'react-native';
import { createSwitchNavigator, createStackNavigator, createDrawerNavigator } from 'react-navigation';
import Loading from './src/pages/loading/loading';
import Login from './src/pages/login/login';
import Home from './src/pages/home/home';
import Chat from './src/pages/chat/chat';
import Gallery from './src/pages/gallery/gallery'
import Camera from './src/components/camera'
import PendingDocuments from './src/pages/pending-documents/pending-documents'
import { name as appName } from './app.json';

const PendingDocumentsStack = createStackNavigator({ PendingDocuments: PendingDocuments});
const GalleryStack = createStackNavigator({ Gallery: Gallery});
const AppStack = createDrawerNavigator({ Home: Home, Chat: Chat});
const AuthStack = createStackNavigator({ Login: Login });
const CameraStack = createStackNavigator({ Camera: Camera });


const App = createSwitchNavigator(
    {
        Loading: Loading,
        App: AppStack,
        Auth: AuthStack,
        Camera: CameraStack,
        GalleryStack: GalleryStack,
        PendingDocumentsStack : PendingDocumentsStack
    },
    {
        initialRouteName: 'Loading'
    }
);


AppRegistry.registerComponent(appName, () => App);

