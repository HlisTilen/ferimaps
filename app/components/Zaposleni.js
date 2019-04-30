import React, { Component } from 'react';

import {StyleSheet, ActivityIndicator, ListView, Text, View, Alert, Button} from 'react-native';

import Zaposleni_service from "../../service/zaposleni_service";

export default class Zaposleni extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }
    async GetItem(id) {
        return await Zaposleni_service.getZaposlen(id)
            .then(response => {

                console.log('En zaposlen');
                console.log(response);
                Alert.alert(
                    'DodajZaposlen',
                    JSON.stringify(response.data),
                    [
                        {
                            text: 'Delete', onPress: async () =>
                                await Zaposleni_service.deleteZaposlen(id)
                                    .then(response => {
                                        console.log('delete');
                                        console.log(response);
                                    })
                                    .catch((error) => {
                                        console.error(error);
                                    })
                        },
                        {
                            text: 'Cancel',
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel',
                        },
                        {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ]
                );
            })
            .catch((error) => {
                console.error(error);
            });
    }

    async componentDidMount() {
        return await Zaposleni_service.getZaposleni()
            .then(response => {
                console.log(response);
                console.log('Tu se zacnejo placi');
                console.log(response);
                let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                this.setState({
                    isLoading: false,
                    dataSource: ds.cloneWithRows(response.data),
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    ListViewItemSeparator = () => {
        return (
            <View
                style={{
                    height: .5,
                    width: "100%",
                    backgroundColor: "#000",
                }}
            />
        );
    };

    render() {

        const {navigate} = this.props.navigation;

        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, paddingTop: 20}}>
                    <ActivityIndicator/>
                </View>
            );
        }

        return (

            <View style={styles.MainContainer}>

                <ListView

                    dataSource={this.state.dataSource}

                    renderSeparator={this.ListViewItemSeparator}

                    renderRow={(rowData) => <Text style={styles.rowViewContainer}
                                                  onPress={this.GetItem.bind(this, rowData._id)}>{rowData.ime}</Text>}

                />
                <Button
                    title="Dodaj zaposlenega"
                    onPress={() => navigate('DodajZaposlen')}
                />
                <Text>{' '}</Text>
                <Button
                    title="Prostori"
                    onPress={() => navigate('Prostori')}
                />
            </View>

        );
    }
}

const styles = StyleSheet.create({

    MainContainer: {

        justifyContent: 'center',
        flex: 1,
        margin: 10

    },

    rowViewContainer: {
        fontSize: 20,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
    }
});


