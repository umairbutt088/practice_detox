import React from 'react';
import {KeyboardAvoidingView} from 'react-native';
import styled from 'styled-components/native';
import {CustomTextInput, Spacer, CustomButton} from '../../../components';

const Container = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'transparent',
  paddingHorizontal: 20,
});
const NameContainer = styled.Text({
  fontSize: 20,
  fontWeight: 'bold',
  color: 'black',
  alignSelf: 'flex-start',
});

export const Login = () => {
  return (
    <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
      <Container>
        <NameContainer>Username</NameContainer>
        <Spacer.Column numberOfSpaces={4} />
        <CustomTextInput />
        <Spacer.Column numberOfSpaces={8} />
        <NameContainer>Password</NameContainer>
        <Spacer.Column numberOfSpaces={4} />
        <CustomTextInput />
        <Spacer.Column numberOfSpaces={20} />
        <CustomButton title={'Login'} />
      </Container>
    </KeyboardAvoidingView>
  );
};
