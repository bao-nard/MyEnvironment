import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import { Select, Option } from 'react-native-select-lists';
import { Link } from "react-router-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default class TheFirstAlgorithm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            timeline:"PRESS HERE!!!",
            degree:0,
            name:'',
            airQuality:0,
            advice:'',
        }
    }
    setDate = () => {
        var today = new Date();
        var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
        this.setState({timeline:date})
    }

    onSelectDistrict = (id) => {
        let District = {
            1: {
                name: 'Quận 1',
                value: 25,
                airQuality: 120,
                advice:' Không lành mạnh cho các nhóm nhạy cảm',
            },
            2: {
                name: 'Quận 2',
                value: 24.5,
                airQuality: 120,
                advice: ' Không lành mạnh cho các nhóm nhạy cảm',
            },
            3: {
                name: 'Quận 3',
                value: 24.7,
                airQuality: 120,
                advice: ' Không lành mạnh cho các nhóm nhạy cảm',
            },
            4: {
                name: 'Quận 4',
                value: 26.7,
                airQuality: 120,
                advice:' Không lành mạnh cho các nhóm nhạy cảm',
            },
            5: {
                name: 'Quận 5',
                value: 26.7,
                airQuality: 120,
                advice: ' Không lành mạnh cho các nhóm nhạy cảm',
            },
            6: {
                name: 'Quận 6',
                value: 26.7,
                airQuality: 120,
                advice: ' Không lành mạnh cho các nhóm nhạy cảm',
            },
            7: {
                name: 'Quận 7',
                value: 26.7,
                airQuality: 120,
                advice: ' Không lành mạnh cho các nhóm nhạy cảm',
            },
            8: {
                name: 'Quận 8',
                value: 26.7,
                airQuality: 120,
                advice: ' Không lành mạnh cho các nhóm nhạy cảm',
            },
            9: {
                name: 'Quận 9',
                value: 26.7,
                airQuality: 120,
                advice: ' Không lành mạnh cho các nhóm nhạy cảm',
            },
            10: {
                name: 'Quận 10',
                value: 26.7,
                airQuality: 120,
                advice: ' Không lành mạnh cho các nhóm nhạy cảm',
            },
            11: {
                name: 'Quận 11',
                value: 26.7,
                airQuality: 120,
                advice: ' Không lành mạnh cho các nhóm nhạy cảm',
            },
            12: {
                name: 'Quận 12',
                value: 26.7,
                airQuality: 120,
                advice: ' Không lành mạnh cho các nhóm nhạy cảm',
            },
            13: {
                name: 'Quận Tân Bình',
                value: 26.7,
                airQuality: 120,
                advice: ' Không lành mạnh cho các nhóm nhạy cảm',
            },
            14: {
                name: 'Quận Bình Tân',
                value: 26.7,
                airQuality: 120,
                advice: ' Không lành mạnh cho các nhóm nhạy cảm',
            },
            15: {
                name: 'Huyện Nhà Bè',
                value: 26.7,
                airQuality: 120,
                advice: ' Không lành mạnh cho các nhóm nhạy cảm',
            },
            16: {
                name: 'Huyện Bình Chánh',
                value: 26.7,
                airQuality: 120,
                advice: ' Không lành mạnh cho các nhóm nhạy cảm',
            },
            17: {
                name: 'Huyện Hóc Môn',
                value: 26.7,
                airQuality: 120,
                advice: ' Không lành mạnh cho các nhóm nhạy cảm',
            },
            18: {
                name: 'Quận Thủ Đức',
                value: 26.7,
                airQuality: 120,
                advice: ' Không lành mạnh cho các nhóm nhạy cảm',
            },


        }
        this.setState({...this.state, degree: District[id].value, name: District[id].name, airQuality: District[id].airQuality, advice: District[id].advice})
    }

    
    render(){
        return (
            <View>
                <View style = {styles.container}>
                    <Text onPress = {this.setDate}>{this.state.timeline}</Text>
                </View>
                <Select style={{ backgroundColor:'#F59cbb'}} onSelect={ this.onSelectDistrict }>
                    <Option value={1}>Quận 1</Option>
                    <Option value={2}>Quận 2</Option>
                    <Option value={3}>Quận 3</Option>
                    <Option value={4}>Quận 4</Option>
                    <Option value={5}>Quận 5</Option>
                    <Option value={6}>Quận 6</Option>
                    <Option value={7}>Quận 7</Option>
                    <Option value={8}>Quận 8</Option>
                    <Option value={9}>Quận 9</Option>
                    <Option value={10}>Quận 10</Option>
                    <Option value={11}>Quận 11</Option>
                    <Option value={12}>Quận 12</Option>
                    <Option value={13}>Quận Tân Bình</Option>
                    <Option value={14}>Quận Bình Tân</Option>
                    <Option value={15}>Huyện Nhà Bè</Option>
                    <Option value={16}>Huyện Bình Chánh</Option>
                    <Option value={17}>Huyện Hóc Môn</Option>
                    <Option value={18}>Quận Thủ Đức</Option>
                </Select>

                <Text>District: {this.state.name}</Text>
                <Text>DeGree: { this.state.degree }</Text>
                <Text>Air Quality: {this.state.airQuality}</Text>
                <Text>Advice: {this.state.advice}</Text>

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
        paddingTop:30,
        backgroundColor:'#F59cbb'
    }
})



