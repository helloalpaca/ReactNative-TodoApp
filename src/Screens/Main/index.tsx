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

interface Props {
   navigation: any;
}

const Main = ({ navigation }: Props) => {

  return (
    <SafeAreaView>
      <Fragment>
        <View>
          <TextTitleLines1>누구나 손 쉬운 퀵배송</TextTitleLines1>
          <TextTitleLines2>지금 시작하세요</TextTitleLines2>
          <ImgView>
            <ImgMain source={require('../../images/circle.png')}></ImgMain>
          </ImgView>
          <TextBOXN>BOX N</TextBOXN>
          <ButtonKakaoStart onPress={() => {
              navigation.navigate('Login', {});
            }}>
            <ButtonText>카카오톡으로 시작할래요</ButtonText>
          </ButtonKakaoStart>
          <ButtonKakaoStart onPress={() => {
              navigation.navigate('SignUp', {});
            }}>
            <ButtonText>휴대폰 번호로 시작할래요</ButtonText>
          </ButtonKakaoStart>
          <ViewAsk>
          <TextAsk>시작이 어려우신가요? </TextAsk>
          <ButtonAsk onPress={() => Alert.alert("Button Clicked!")}>
            <Text>바로 문의하기</Text>
          </ButtonAsk>
          </ViewAsk>
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

const TextTitleLines1 = Styled.Text`
 align-items: center;
 padding: 0px 24px;
 margin-top: 128px;
 
 text-align: center;
 font-style: normal;
 font-weight: bold;
 font-size: 20px;
 line-height: 26px;
`;

const TextTitleLines2 = Styled.Text`
 align-items: center;
 padding: 0px 24px;

 text-align: center;
 font-style: normal;
 font-weight: bold;
 font-size: 32px;
 line-height: 42px;
`;

const ImgView = Styled.View`
 text-align: center;
 margin-top: 38px;
`;

const ImgMain = Styled.Image`
 align-self: center;
 width: 152px;
 height: 152px;
`;

const TextBOXN = Styled.Text`
font-style: normal;
font-weight: bold;
font-size: 48px;
line-height: 70px;
text-align: center;
align-items: center;
margin-bottom: 31px;

color: #000000;
`;

const ButtonKakaoStart = Styled.TouchableOpacity`
align-items: center;
padding: 12px 24px;
margin: 14px 24px 0px 24px;

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

const ViewAsk = Styled.View`
width: 100%;
flex-direction: row;
align-items: center;
justify-content: center;
margin-top: 36px;
`;

const TextAsk = Styled.Text`
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;
`;

const ButtonAsk = Styled.TouchableOpacity`
`;

export default Main;
