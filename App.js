import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NativeRouter, Route } from "react-router-native";
import Home from './Home';
import Register from './Register';
import ListFunction from './ListFunction'
import TheFirstAlgorithm from './Func_1'
import TheSecondAlgorithm from './Func_2';

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View style ={styles.container}>
          <Route exact path="/" component={Home} />
          <Route path="/Register" component={Register} />
          <Route path="/ListFunction" component={ListFunction}/>
          <Route path="/Func_1" component={TheFirstAlgorithm}/>
          <Route path="/Func_2" component={TheSecondAlgorithm}/>
        </View>
      </NativeRouter>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFC0CB',
    flex:1,
  },
 })


