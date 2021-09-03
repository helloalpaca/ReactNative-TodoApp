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
  Keyboard,
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

const SignUp = ({ navigation }: Props) => {

  return (
    <SafeAreaView>
      <Fragment>
        <View>
          <TextTitleName>이름</TextTitleName>
          <TextInputName></TextInputName>
          <TextTitleRegistration>주민등록번호</TextTitleRegistration>
          <TextInputRegistration keyboardType="numeric"></TextInputRegistration>
          <TextInputRegistration2 keyboardType="numeric"></TextInputRegistration2>
          <TextTitlePhone>휴대폰 번호</TextTitlePhone>
          <TextInputPhone keyboardType="numeric"></TextInputPhone>
          <TextInputVerification keyboardType="numeric"></TextInputVerification>
        </View>
      </Fragment>
    </SafeAreaView>
  );
};

const TextTitleName = Styled.Text`
  font-size: 20px;
`;

const TextInputName = Styled.TextInput`
border: 1px solid black;
`;

const TextTitleRegistration = Styled.Text`
  font-size: 20px;
`;

const TextInputRegistration = Styled.TextInput`
border: 1px solid black;
`;

const TextInputRegistration2 = Styled.TextInput`
border: 1px solid black;
`;

const TextTitlePhone = Styled.Text`
  font-size: 20px;
`;

const TextInputPhone = Styled.TextInput`
border: 1px solid black;
`;

const TextInputVerification = Styled.TextInput`
border: 1px solid black;
`;

export default SignUp;
