import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import {SimpleSearchBar} from "../SimpleSearchBar";
import { Image, Divider } from 'react-native-elements';

export default class SeznamScreen extends Component {
  //Iz search bara pridobljena vrednost:
  constructor(props) {
    super(props);
    this.state = {
      searchString: ""
    }
  }

  onSearchChange = (value) => {
    this.setState({searchString: value})
  }

  openDetails = () => {
    this.props.navigation.navigate('Details');
  }


    //Iz search bara pridobljena vrednost//
  render() {
    return (
      <View style={styles.container}>
        <SimpleSearchBar onSearchChange={this.onSearchChange}></SimpleSearchBar>   
        <Text>{this.state.searchString}</Text>
        <FlatList
          data={[
            {key: 'A301', namembnost:"predavalnica"},
            {key: 'A302', namembnost:"predavalnica"},
            {key: 'A303', namembnost:"predavalnica"},
            {key: 'A304', namembnost:"predavalnica"},
            {key: 'A305', namembnost:"predavalnica"},
            {key: 'A306', namembnost:"predavalnica"},
            {key: 'Alfa', namembnost:"predavalnica"},
            {key: 'Beta', namembnost:"predavalnica"},
            {key: 'Gama', namembnost:"predavalnica"},
            {key: 'Delta', namembnost:"predavalnica"},
            {key: 'P01', namembnost:"predavalnica"},
            {key: 'P02', namembnost:"predavalnica"},
            {key: 'P03', namembnost:"predavalnica"},
            {key: 'P04', namembnost:"predavalnica"},
            {key: 'P05', namembnost:"predavalnica"},
            {key: 'P06', namembnost:"predavalnica"},
            {key: 'N1-1', namembnost:"predavalnica"},
            {key: 'N1-2', namembnost:"predavalnica"},
            {key: 'N1-3', namembnost:"predavalnica"},
            {key: 'N1-4', namembnost:"predavalnica"},
          ]}
          renderItem={({item}) => 
            <TouchableWithoutFeedback onPress={this.openDetails}>
            <View >
              <View style={{flex: 1, flexDirection: 'row', marginBottom: 6, marginTop:6, marginLeft: 10}}>
                <Image
                source={{ uri: 'https://i.pinimg.com/originals/f5/7e/00/f57e00306f3183cc39fa919fec41418b.jpg'}}
                style={{ width: 44, height: 44, borderRadius: 22}}
                />
                <View>
                  <Text style={styles.name}>{item.key}</Text>
                  <Text style={styles.item}>{item.namembnost}</Text>
                </View>
                
              </View>

              <Divider style={{ backgroundColor: '#D3D3D3', marginLeft:60 }} />
            </View>
            </TouchableWithoutFeedback>
          }
        />
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
  }
})