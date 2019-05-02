import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import {SimpleSearchBar} from "../SimpleSearchBar";
 
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: ""
    }
  }

  onSearchChange = (value) => {
    this.setState({searchString: value})
  }

  render() {
    return (
      <View style={{ flex: 1,  alignItems: 'center' }}>
      <SimpleSearchBar onSearchChange={this.onSearchChange}></SimpleSearchBar> 
        <Text style={{ marginTop: 50, fontSize: 25, justifyContent: 'center' }}>Zemljevid</Text>
        {/*
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Settings')}>
            <Text>Go to settng Tab</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('FlatList')}>
            <Text>Open flatlist</Text>
          </TouchableOpacity>
        </View>*/}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});