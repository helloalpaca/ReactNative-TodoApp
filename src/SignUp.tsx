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

const SignUp = ({}: Props) => {
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
          <Text>SignUp</Text>
          {/* <TextHelloWorldStyled>Hello World, Styled!</TextHelloWorldStyled>     
          <Pressable style={styles.buttonStyle} onPress={()=> Alert.alert("Button Clicked!")}>
           <Text style={styles.textHelloworld}>Hello!</Text>
         </Pressable> */}
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

const TextTitleLines = Styled.Text`
 flex-direction: column;
 justify-content: center;
 align-items: center;
 padding: 0px 24px;

 height: 72px;
 left: 0px;
 right: 0px;
 top: 128px;
`;

const ImgMain = Styled.Image`
 width: 152px;
 height: 152px;
 left: 112px;
 top: 238px;
`;

const TextBOXN = Styled.Text`
width: 194px;
height: 84px;
left: 92px;
top: 378px;

font-family: Noto Sans KR;
font-style: normal;
font-weight: bold;
font-size: 48px;
line-height: 70px;
text-align: center;

color: #000000;
`;

const ButtonKakaoStart = Styled.TouchableOpacity`
align-items: center;
padding: 12px 24px;

background: #000000;
border-radius: 8px;
`;

const ButtonText = Styled.Text`
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 18px;
color: #FFFFFF;
`;

const TextAsk = Styled.Text`
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;
`;

const ButtonAsk = Styled.TouchableOpacity`

`;

export default SignUp;
