import React, {FunctionComponent} from 'react';
import styled from 'styled-components/native';

interface props {
  onChangeText?: (text: string) => void;
  testID?: string;
}

const Container = styled.View({
  width: '100%',
  backgroundColor: 'rgba(0,0,0,0.04)',
  borderRadius: 10,
});

const Input = styled.TextInput({
  width: '100%',
  borderWidth: 2,
  borderColor: 'green',
  borderRadius: 10,
  fontSize: 20,
  paddingVertical: 10,
  fontColor: 'black',
});

export const CustomTextInput: FunctionComponent<props> = ({
  onChangeText,
  testID,
}) => {
  return (
    <Container>
      <Input onChangeText={onChangeText} testID={testID} />
    </Container>
  );
};
