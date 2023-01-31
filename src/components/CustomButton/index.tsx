import React, {FunctionComponent} from 'react';
import styled from 'styled-components/native';

interface props {
  title?: string;
  onPress?: () => void;
}

const Container = styled.TouchableOpacity({
  width: 100,
  paddingVertical: 10,
  backgroundColor: 'green',
  borderRadius: 10,
});

const ButtonTitle = styled.Text({
  fontSize: 20,
  fontWeight: 'bold',
  color: 'white',
  alignSelf: 'center',
});

export const CustomButton: FunctionComponent<props> = ({title, onPress}) => {
  return (
    <Container>
      <ButtonTitle onPress={onPress}>{title}</ButtonTitle>
    </Container>
  );
};
