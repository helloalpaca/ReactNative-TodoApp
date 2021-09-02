import React, { useContext } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './Login';

import Styled from 'styled-components/native';

const Stack = createStackNavigator();

const LoginNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    title: 'title',
                    headerTransparent=true,
                    headerTintColor: '#E70915',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
        </Stack.Navigator>
    );
};

export default () => {
    const {isLoading, userInfo} = useContext<IUserContext>(UserContext);

    console.log(isLoading);
    console.log(userInfo);
    if(isLoading==false){
        console.log("Fail");
    }
    return (
        <NavigationContainer>
            
        </NavigationContainer>
    );
};