import React from 'react';

import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Image, Divider } from 'react-native-elements';
import Dimensions from 'Dimensions';
import { Button } from 'react-native';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;

export default class DetailsScreen extends React.Component {
  //Detail Screen to show from any Open detail button
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Image
                source={{ uri: 'https://i.pinimg.com/originals/21/b5/9d/21b59de7a05641c00d56c667eb763a20.jpg'}}
                style={{ height: imageHeight, width: imageWidth }}
                //style={{ width: , height: 44, borderRadius: 22}}
                />
        <Text style={styles.h1}>A101</Text>
        <Text style={styles.name}>Stavba</Text>
        <Text style={styles.item}>objekt A</Text>

        <Text style={styles.name}>Namembnost</Text>
        <Text style={styles.item}>kabinet</Text>

        <Text style={styles.name}>Uporabniki</Text>
        <Text style={styles.item}>prof. Lorem Ipsum</Text>
      
        <Divider style={{ backgroundColor: '#D3D3D3', marginTop:20, marginBottom:20 }} />

        <View style={styles.viewButton}>
          <Text style={styles.buttonText}>Navodila za pot</Text>
        </View>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
  },
  item: {
    paddingLeft: 10,
    fontSize: 12,
    fontWeight: '300',
  },
  h1: {
    marginTop: 30,
    marginBottom:20,
    fontWeight: 'bold',
    fontSize: 32,
    color: 'black',
  },
  name: {
    paddingLeft: 10,
    marginTop: 2,
    fontWeight: '300',
    fontSize: 16,
    color: 'black',
  },
  row: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  viewButton:{
    borderRadius: 17,
    borderColor: '#D3D3D3',
    borderWidth: 1,
    width:200,
    height:35,
    alignItems: 'center',
  },
  buttonText:{
    marginTop:6,
    marginBottom:4,
    fontWeight: '300',
  }
})