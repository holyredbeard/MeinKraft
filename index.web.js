import { AppRegistry } from 'react-native';
import App from './App';

AppRegistry.registerComponent('MinecraftApp', () => App);
AppRegistry.runApplication('MinecraftApp', {
  rootTag: document.getElementById('root')
}); 