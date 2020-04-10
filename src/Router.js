import React from 'react';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

//app stack
import Home from '../src/screens/Home';

//auth stack
import Login from './screens/Auth/Login'
import Register from './screens/Auth/Register'
//import Icon from 'react-native-vector-icons';
import Icon from "react-native-vector-icons/FontAwesome";

import AuthLoading from "./screens/AuthLoading";
import BasketList from "./screens/Basket/BasketList";
import Profile from "./screens/Profile";

const appStack = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Ürünler',
            tabBarIcon: ({tintColor}) => <Icon name={'list'} style={{color: tintColor}}  size={22}/>
        }
    }, BasketList: {
        screen: BasketList,
        navigationOptions: {
            title: 'Siparişlerim',
            tabBarIcon: ({tintColor}) => <Icon name={'shopping-bag'} style={{color: tintColor}}  size={22}/>
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            title: 'Profil',
            tabBarIcon: ({tintColor}) => <Icon name={'user'} style={{color: tintColor}}  size={22} />
        }
    }
}, {headerLayoutPreset: 'center', initialRouteName: 'BasketList'});

const authStack = createBottomTabNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => <Icon name={'log-in'} style={{color: tintColor}}/>
        }
    }, Register: {
        screen: Register,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => <Icon name={'person-add'} style={{color: tintColor}}/>
        }
    }
}, {
    initialRouteName: 'Register',
    tabBarOptions: {
        activeTintColor: "#fff",
        inactiveBackgroundColor: "#5886589",
        style: {
            backgroundColor: "#171f33"
        }
    }
});


const switchNavigator = createSwitchNavigator(
    {
        AutoLoading: AuthLoading,
        App: appStack,
        Auth: authStack
    }, {
        initialRouteName: 'AutoLoading'
    }
)
export default createAppContainer(switchNavigator)