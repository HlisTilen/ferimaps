import { SearchBar } from 'react-native-elements';
import React from 'react';
import {StyleSheet} from 'react-native';

export class SimpleSearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      search: ""
    };
  }

  updateSearch = search => {
    this.setState({ search });
    this.props.onSearchChange(search);
  };

  render() {

    return (
      <SearchBar
        platform={"android"}
        placeholder={"Išči"}
        onChangeText={this.updateSearch}
        value={this.state.search}
      />
    );
  }
}