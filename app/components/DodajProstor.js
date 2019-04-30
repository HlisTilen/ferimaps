import React, {Component} from 'react';

import {StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';

import Prostori_service from "../../service/prostori_service";
import Prostor from '../../service/prostor_interface'

export default class DodajProstor extends Component {
    constructor() {
        super();
        this.state = {
            naziv: '',
            objekt: '',
            nadstropje: '',
            soba: '',
            namembnost: ''
        }
    }

    updateValue(text, field) {
        this.setState({[field]: text});
    }

    async submit() {
        let prostor: Prostor = {
            naziv: this.state.naziv,
            objekt: this.state.objekt,
            nadstropje: this.state.nadstropje,
            soba: this.state.soba,
            namembnost: this.state.namembnost
        };
        console.warn(prostor);
        await Prostori_service.postProstor(prostor).then(response => {
            console.log('post');
            console.log(response);
        })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder="Naziv"
                    style={styles.input}
                    onChangeText={(text) => this.updateValue(text, 'naziv')}
                />
                <TextInput
                    placeholder="Objekt"
                    style={styles.input}
                    onChangeText={(text) => this.updateValue(text, 'objekt')}
                />
                <TextInput
                    placeholder="Nadstropje"
                    style={styles.input}
                    onChangeText={(text) => this.updateValue(text, 'nadstropje')}
                />
                <TextInput
                    placeholder="Soba"
                    style={styles.input}
                    onChangeText={(text) => this.updateValue(text, 'soba')}
                />
                <TextInput
                    placeholder="Namembnost"
                    style={styles.input}
                    onChangeText={(text) => this.updateValue(text, 'namembnost')}
                />
                <TouchableOpacity
                    onPress={() => this.submit()}
                    style={styles.btn}>
                    <Text>SHRANI</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        flex: 1,
        justifyContent: 'center',
    },
    btn: {
        backgroundColor: 'skyblue',
        height: 40,
        color: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    }
});





