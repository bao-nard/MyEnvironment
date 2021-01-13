import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Link } from "react-router-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Header } from 'react-native-elements'
import DropdownMenu from 'react-native-dropdown-menu'
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { Avatar, Card, Button } from 'react-native-paper';


const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
export default class ListFunction extends React.Component {
    _menu = null;

    setMenuRef = ref => {
        this._menu = ref;
    };

    hideMenu = () => {
        this._menu.hide();
    };

    showMenu = () => {
        this._menu.show();
    };
    render() {
        return (
            <View>
                {/* create header */}
                <View style={styles.container}>
                    <TouchableOpacity>
                        <Menu
                            ref={this.setMenuRef}
                            button={<Text onPress={this.showMenu}>
                                <Icon name="user" size={30} color="#bf1213" />
                            </Text >}>
                            <MenuItem onPress={this.hideMenu}>User</MenuItem>
                            <MenuItem onPress={this.hideMenu}>Profile</MenuItem>
                            <MenuItem onPress={this.hideMenu} disabled>
                                Log Out
                        </MenuItem>
                            <MenuDivider />
                        </Menu>
                    </TouchableOpacity>

                    <TextInput style={{ textAlign: 'right' }}>
                        <Icon name="search" size={30} color="#bf1213" />
                    </TextInput>

                    <TouchableOpacity>
                        <Link to="/">
                            <Icon name="home" size={30} color="#bf1213" />
                        </Link>
                    </TouchableOpacity>
                </View>


                <View style={styles.header}>
                   
                    <Card style={{ backgroundColor: '#F59cbb' }}>
                        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                        <Card.Actions style={{ paddingLeft: '55%' }}>
                            <TouchableOpacity>
                                <Link to = "/Func_1">
                                    <Button style={{ color: '#FFF' }}>Ok</Button>
                                </Link>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Link to ="/">
                                    <Button style={{ color: '#FFF' }}>Cancel</Button>
                                </Link>
                            </TouchableOpacity>
                        </Card.Actions>
                    </Card>
                </View>

                <View style={styles.header}>
                    <Card style={{ backgroundColor: '#F59cbb' }}>
                        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                        <Card.Actions style={{ paddingLeft: '55%' }}>
                            <TouchableOpacity>
                                <Link to="/Func_2">
                                    <Button style={{ color: '#FFF' }}>Ok</Button>
                                </Link>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Link to="/">
                                    <Button style={{ color: '#FFF' }}>Cancel</Button>
                                </Link>
                            </TouchableOpacity>
                        </Card.Actions>
                    </Card>
                </View>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 15,
    },
    header: {
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
    }
})

// import React from 'react';

// import { View, Text } from 'react-native';
// import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

// class App extends React.PureComponent {
//     _menu = null;

//     setMenuRef = ref => {
//         this._menu = ref;
//     };

//     hideMenu = () => {
//         this._menu.hide();
//     };

//     showMenu = () => {
//         this._menu.show();
//     };

//     render() {
//         return (
//             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//                 <Menu
//                     ref={this.setMenuRef}
//                     button={<Text onPress={this.showMenu}>Show menu</Text>}
//                 >
//                     <MenuItem onPress={this.hideMenu}>Menu item 1</MenuItem>
//                     <MenuItem onPress={this.hideMenu}>Menu item 2</MenuItem>
//                     <MenuItem onPress={this.hideMenu} disabled>
//                         Menu item 3
//                     </MenuItem>
//                     <MenuDivider />
//                     <MenuItem onPress={this.hideMenu}>Menu item 4</MenuItem>
//                 </Menu>
//             </View>
//         );
//     }
// }

// export default App;