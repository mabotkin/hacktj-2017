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
         transform: [{translate: [-1, 1, -7]}],
       }}>
       <Image source={asset('out.png')}
      style={{width: 3, height: 3}} />
       </View>
      </View>
    );
  }
};

AppRegistry.registerComponent('vr', () => vr);
