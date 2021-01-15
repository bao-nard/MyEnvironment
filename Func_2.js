import React from 'react'
import { FlatList } from 'react-native';
import { Platform,StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Link } from "react-router-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default class TheSecondAlgorithm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            District: [
                {
                    name: "Quận 1",
                    degree: 29,
                    airQuality: 120,
                },
                {
                    name: "Quận 2",
                    degree: 27,
                    airQuality: 129,
                },
                {
                    name: "Quận 3",
                    degree: 27.6,
                    airQuality: 128,
                }
            ],
            District_Degree:[],
            District_AirQuality:[],
        }

        this.sortAscendingDegree = this.sortAscendingDegree.bind(this);
        this.sortAscendingAirQuality = this.sortAscendingAirQuality.bind(this);
    }

    sortAscendingDegree = () =>{
        let arr = this.state.District.sort((a, b) => (a.degree > b.degree) ? 1 : -1);
        // console.log(arr);
        this.setState({
            District : [...this.state.District],
            District_AirQuality: [...this.state.District_AirQuality],
            District_Degree:arr,
        });
    }


    sortAscendingAirQuality = () =>{
        let arr = this.state.District.sort((a,b) => (a.airQuality > b.airQuality)? 1 : -1);
        this.setState({
            District:[...this.state.District],
            District_Degree:[...this.state.District_Degree],
            District_AirQuality:arr,});
    }

    render(){

        return(
            <View>
                <TouchableOpacity onPress = {this.sortAscendingDegree}>
                    <Text>Sort Degree In HCM CiTy</Text>
                    {
                        this.state.District_Degree.map(x => (
                            <Text>{x.name}</Text>
                        ))
                    }
                </TouchableOpacity>
                
                

                <TouchableOpacity onPress = {this.sortAscendingAirQuality}>
                    <Text>Sort Air Quality In HCM City</Text>
                    {this.state.District_AirQuality.map(index => (<Text>{index.name}</Text>))}
                </TouchableOpacity>


              
                <TouchableOpacity>
                    <Link to="/ListFunction">
                        <Icon name="angle-double-left" size={40} color="#bf1213" />
                    </Link>
                </TouchableOpacity>
               
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#F59cbb',
    },
    header:{
        alignSelf: 'stretch',
        backgroundColor: '#FFC0CB',
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 60,
        paddingRight: 60,
        marginTop: 30,
    }
})