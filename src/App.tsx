 import React, {Fragment, useRef, useEffect } from 'react';
 import {NavigationContainer} from '@react-navigation/native';
 import {createStackNavigator} from '@react-navigation/stack';

 import KakaoLogin from './Screens/KaKaoLogin';
 import SignUp from './Screens/SignUp';
 import Main from './Screens/Main';

 interface Props {
   navigation: any;
 }

 const Stack = createStackNavigator();
 
 const App = ({}: Props) => {
   const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);

   return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Main' component={Main} />
        <Stack.Screen name='KakaoLogin' component={KakaoLogin}/>
        <Stack.Screen name='SignUp' component={SignUp}/>
      </Stack.Navigator>
    </NavigationContainer>
   );
 };
 
 export default App;
 