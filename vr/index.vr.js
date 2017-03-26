import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  Image,
  View,
} from 'react-vr';

export default class vr extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('tj.jpg')}/>


       <View style={{
         flex: 1,
         flexDirection: 'row',
         justifyContent: 'space-between',
         width: 2,
         alignItems: 'stretch',
         transform: [{translate: [-4, 1, -10.5]}],
       }}>
       <Image source={asset('original.png')}
      style={{width: 4, height: 4}} />
       <Image source={asset('out.png')}
      style={{width: 4, height: 4}} />
       </View>
      </View>
    );
  }
};

AppRegistry.registerComponent('vr', () => vr);
