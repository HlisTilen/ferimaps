import React, {Component} from 'react';

import {StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';

import Zaposleni_service from "../../service/zaposleni_service";
import Zaposlen from '../../service/zaposlen_interface'

export default class DodajZaposlen extends Component {
    constructor() {
        super();
        this.state = {
            ime: '',
            priimek: '',
            strokovni_naziv: '',
            email: '',
            telefon: '',
            id_prostora: ''
        }
    }

    updateValue(text, field) {
        this.setState({[field]: text});
    }

    async submit() {
        let zaposlen: Zaposlen = {
            ime: this.state.ime,
            priimek: this.state.priimek,
            strokovni_naziv: this.state.strokovni_naziv,
            email: this.state.email,
            telefon: this.state.telefon,
            id_prostora: this.state.id_prostora
        };
        console.warn(zaposlen);
        await Zaposleni_service.postZaposlen(zaposlen).then(response => {
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
                    placeholder="Ime"
                    style={styles.input}
                    onChangeText={(text) => this.updateValue(text, 'ime')}
                />
                <TextInput
                    placeholder="Priimek"
                    style={styles.input}
                    onChangeText={(text) => this.updateValue(text, 'priimek')}
                />
                <TextInput
                    placeholder="Strokovni naziv"
                    style={styles.input}
                    onChangeText={(text) => this.updateValue(text, 'strokovni_naziv')}
                />
                <TextInput
                    placeholder="Email"
                    style={styles.input}
                    onChangeText={(text) => this.updateValue(text, 'email')}
                />
                <TextInput
                    placeholder="Telefon"
                    style={styles.input}
                    onChangeText={(text) => this.updateValue(text, 'telefon')}
                />
                <TextInput
                    placeholder="id_prostora"
                    style={styles.input}
                    onChangeText={(text) => this.updateValue(text, 'id_prostora')}
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





