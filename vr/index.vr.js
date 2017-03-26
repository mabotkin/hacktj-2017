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

var RANDOM = true;

var swap = Math.random()<0.5; // i hate this language
if(!RANDOM)
	swap = true;
var name1 = swap?"original.png":"out.png";
var name2 = swap?"out.png":"original.png";

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
       <Image source={asset(name1)}
      style={{width: 4, height: 4}} />
       <Image source={asset(name2)}
      style={{width: 4, height: 4}} />
       </View>
      </View>
    );
  }
};

AppRegistry.registerComponent('vr', () => vr);
