import React, {useState} from 'react';
import {Alert, KeyboardAvoidingView} from 'react-native';
import styled from 'styled-components/native';
import {CustomTextInput, Spacer, CustomButton} from '../../../components';

const Container = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'transparent',
  paddingHorizontal: 20,
});
const TitleText = styled.Text({
  fontSize: 30,
  fontWeight: 'bold',
  color: 'black',
});
const NameContainer = styled.Text({
  fontSize: 20,
  fontWeight: 'bold',
  color: 'black',
  alignSelf: 'flex-start',
});

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = () =>
    Alert.alert(`Login successful with ${username} and ${password}`);

  return (
    <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
      <Container>
        <TitleText testID="title">Login</TitleText>
        <Spacer.Column numberOfSpaces={40} />
        <NameContainer testID="nametext">Username</NameContainer>
        <Spacer.Column numberOfSpaces={4} />
        <CustomTextInput testID="username" onChangeText={e => setUsername(e)} />
        <Spacer.Column numberOfSpaces={8} />
        <NameContainer testID="passwordtext">Password</NameContainer>
        <Spacer.Column numberOfSpaces={4} />
        <CustomTextInput testID="password" onChangeText={p => setPassword(p)} />
        <Spacer.Column numberOfSpaces={20} />
        <CustomButton testID="button" title={'Login'} onPress={login} />
      </Container>
    </KeyboardAvoidingView>
  );
};
