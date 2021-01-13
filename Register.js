import React from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity, View
} from 'react-native';
import { Link } from "react-router-native";

export default class Register extends React.Component {
    render() {
        return (
            <View style={styles.regis}>
                <Text style={styles.header}>Register</Text>
                <TextInput style={styles.textInput}
                    placeholder="Your UserName"
                    underlineColorAndroid='transparent' />

                <TextInput style={styles.textInput}
                    placeholder="Your PassWord"
                    secureTextEntry={true}
                    underlineColorAndroid='transparent' />
                <TextInput style={styles.textInput}
                    placeholder="Replay Your PassWord"
                    secureTextEntry={true}
                    underlineColorAndroid='transparent' />

        
                <TouchableOpacity>
                    <Link to="/" style={styles.button}>
                        <Text style={styles.btnText}>Sign Up</Text>
                    </Link>
                </TouchableOpacity>
               
        
                <Link to="/" style={styles.button}>
                    <Text >Back to Home</Text>
                </Link>
            </View>

        );
    }
}

const styles = StyleSheet.create({

    regis: {
        alignSelf:'stretch',
        backgroundColor: '#FFC0CB',
        display:'flex',
        justifyContent: 'center',
        paddingLeft: 60,
        paddingRight: 60,
        marginTop:30,
    },
    header: {
        paddingLeft: 40,
        fontSize: 40,
        color: '#fff',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#199187',
        borderBottomWidth: 1,

    },
    textInput: {
        // alignSelf:'stretch',
        height: 40,
        marginBottom: 30,
        color: "#fff",
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,
    },
    button: {
        // alignSelf:'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#F59cbb',
        marginTop: 30,
    },
    btnText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
})