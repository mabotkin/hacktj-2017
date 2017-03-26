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

function shuffle(array)
{
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex)
	{

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
	}

  return array;
}

var RANDOM = false;
var names = ["original.png","blur.png","out.png"];
if(RANDOM)
	names = shuffle(names);

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
         transform: [{translate: [-5, 1, -10.5]}],
       }}>
       <Image source={asset(names[0])}
      style={{width: 4, height: 4}} />
       <Image source={asset(names[1])}
      style={{width: 4, height: 4}} />
       <Image source={asset(names[2])}
      style={{width: 4, height: 4}} />
       </View>
      </View>
    );
  }
};

AppRegistry.registerComponent('vr', () => vr);
