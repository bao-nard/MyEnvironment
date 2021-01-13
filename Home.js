import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Link } from "react-router-native";
import logo from './Images/logo.png';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            passWord: "",
        }
    }

    setUserName = (user) => {
        this.setState({
            ...this.state,
            userName: user
        })
    }

    setPassWord = (pass) => {
        this.setState({
            ...this.state,
            passWord: pass
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={logo} style={styles.image}></Image>

                <StatusBar style="auto"></StatusBar>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}

                        placeholder="Email"
                        placeholderTextColor="#003f5c"
                        underlineColorAndroid='transparent'
                        onChangeText={this.setUserName}
                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Password"
                        placeholderTextColor="#003f5c"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        onChangeText={this.setPassWord}
                    />
                </View>

                <TouchableOpacity >
                    <Text style={styles.forgot_button}>Forgot Password?</Text>
                </TouchableOpacity>

                <Link to="/Register" style={styles.register_button}>
                    <Text>Register</Text>
                </Link>

                <TouchableOpacity style={styles.loginBtn}>
                    <Link to ="/ListFunction">
                        <Text style={styles.loginText}>LOGIN</Text>
                    </Link>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        // backgroundColor: '#FFC0CB',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        margin: 20,

    },

    inputView: {
        backgroundColor: "#ebe134",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
        justifyContent: 'center',
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },

    forgot_button: {
        height: 20,

    },

    loginBtn: {
        width: "35%",
        borderRadius: 25,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "#FF1493",
    },
    register_button: {
        fontWeight: 'bold',
        margin: 15,
    }
});


// import React from 'react'
// import {StyleSheet, Text, View} from 'react-native'
// import Register from './Register'

// export default class App extends React.Component{
//   render(){
//     return(
//       <View style ={styles.container}>
//         <Register/>
//       </View>
//     )
//   }
// }


// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     justifyContent: 'center',
//     backgroundColor:'#FFC0CB', 
//     paddingLeft:60,
//     paddingRight:60,
//   }
// });
