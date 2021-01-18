import React from 'react'
import { FlatList } from 'react-native';
import { Platform,StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ScrollView  } from 'react-native';
import { Link } from "react-router-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Constants from 'expo-constants';


export default class TheSecondAlgorithm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            District: [
                {
                    name: 'Quận 1',
                    degree: 25,
                    airQuality: 100,
                    advice:' Moderate',
                },
                {
                    name: 'Quận 2',
                    degree: 24.5,
                    airQuality: 93,
                    advice: ' Moderate',
                },
                {
                    name: 'Quận 3',
                    degree: 24.7,
                    airQuality: 150,
                    advice: 'Unhealthy for sensitive group',
                },
                {
                    name: 'Quận 4',
                    degree: 26.5,
                    airQuality: 121,
                    advice:'Unhealthy for sensitive group',
                },
                {
                    name: 'Quận 5',
                    degree: 26.1,
                    airQuality: 150,
                    advice: 'Unhealthy for sensitive group',
                },
                {
                    name: 'Quận 6',
                    degree: 25.5,
                    airQuality: 145,
                    advice: 'Unhealthy for sensitive group',
                },
                {
                    name: 'Quận 7',
                    degree: 27.0,
                    airQuality: 82,
                    advice: 'Moderate',
                },
                {
                    name: 'Quận 8',
                    degree: 26.7,
                    airQuality: 143,
                    advice: 'Unhealthy for sensitive group',
                },
                {
                    name: 'Quận 9',
                    degree: 27.3,
                    airQuality: 162,
                    advice: 'Unhealthy',
                },
                {
                    name: 'Quận 10',
                    degree: 25.7,
                    airQuality: 69,
                    advice: 'Moderate',
                },
                {
                    name: 'Quận 11',
                    degree: 26.2,
                    airQuality: 151,
                    advice: 'Unhealthy for sensitive group',
                },
                {
                    name: 'Quận 12',
                    degree: 27.1,
                    airQuality: 119,
                    advice: 'Unhealthy for sensitive group',
                },
                {
                    name: 'Quận Tân Bình',
                    degree: 27.9,
                    airQuality: 168,
                    advice: 'Unhealthy',
                },
                {
                    name: 'Quận Bình Tân',
                    degree: 27.2,
                    airQuality: 127,
                    advice: 'Unhealthy for sensitive group',
                },
                {
                    name: 'Huyện Nhà Bè',
                    degree: 25.9,
                    airQuality: 113,
                    advice: 'Unhealthy for sensitive group',
                },
                {
                    name: 'Huyện Bình Chánh',
                    degree: 29.3,
                    airQuality: 462,
                    advice: 'Hazardous',
                },
                {
                    name: 'Huyện Hóc Môn',
                    degree: 27.4,
                    airQuality: 114,
                    advice: 'Unhealthy for sensitive group',
                },
                {
                    name: 'Quận Thủ Đức',
                    degree: 26.8,
                    airQuality: 142,
                    advice: 'Unhealthy for sensitive group',
                },
    
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
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}> 
                
                     <TouchableOpacity onPress = {this.sortAscendingAirQuality}>
                        <Text style={styles.sort}>District Ranking by Air Quality</Text>
                        {
                            this.state.District_AirQuality.map(index => (
                                <Text style={styles.text}>{index.name}</Text>
                            ))
                        }
                    </TouchableOpacity>

                    <TouchableOpacity onPress = {this.sortAscendingDegree}>
                        <Text style={styles.sort}>District Ranking by Temperature</Text>
                        {
                            this.state.District_Degree.map(x => (
                                <Text style={styles.text}>{x.name}</Text>
                            ))
                        }
                    </TouchableOpacity>
              
                    <TouchableOpacity>
                        <Link to="/ListFunction">
                            <Icon name="angle-double-left" size={40} color="#bf1213" backgroundColor="#F59cbb" marginTop={20}/>
                        </Link>
                    </TouchableOpacity>
                </ScrollView> 
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    header:{
        alignSelf: 'stretch',
        backgroundColor: '#FFC0CB',
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 60,
        paddingRight: 60,
        marginTop: 30,
    },
    sort: {
        padding: 5,
        marginBottom: 15,
        marginTop: 15,
        fontSize: 20,
        backgroundColor: '#F59cbb',

    },
    container: {
        flex: 1,
        backgroundColor: '#F59cbb',
    },

    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },

    text: {
        padding: 2,
        fontSize: 18,
    }
})