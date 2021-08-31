 import React, {Fragment, useRef, useEffect } from 'react';
 import Styled from 'styled-components/native';
 
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   Animated,
   Button,
   Alert,
   Pressable,
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';

 interface Props {}
 
 const App = ({}: Props) => {
   const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);

   useEffect(() => {
     
  });

   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
 
   return (
     <SafeAreaView>
       <Fragment>
         <View>
           {/* <Button title="TITLE" onPress = {() => Alert.alert("Button Clicked!")} /> */}
           <TextHelloWorldStyled>Hello World, Styled!</TextHelloWorldStyled>     
           <Pressable style={styles.buttonStyle} onPress={()=> Alert.alert("Button Clicked!")}>
            <Text style={styles.textHelloworld}>Hello!</Text>
          </Pressable>
         </View>
       </Fragment>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   highlight: {
     fontWeight: '700',
   },
   textHelloworld: {
     fontSize: 24,
     color: Colors.dark,
   },
   buttonStyle: {
     backgroundColor: 'yellow',
     borderWidth: 5,
   }
 });
 
 const TextHelloWorldStyled = Styled.Text`
   font-size: 36;
   color: ${Colors.dark};
 `;
 
 export default App;
 