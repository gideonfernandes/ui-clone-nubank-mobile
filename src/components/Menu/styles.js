import styled from 'styled-components/native';
import { StyleSheet, Animated } from 'react-native';

export const Container = styled(Animated.ScrollView)`
  margin: 4px 30px;
`;

export const Code = styled.View`
  background: #FFF;
  padding: 8px;
  align-self: center;
`;

export const Nav = styled.View`
  margin-top: 15px;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: rgba(255, 255, 255, 0.8);
`;

export const NavItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 0;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(255, 255, 255, 0.8);
`;

export const NavText = styled.Text`
  font-size: 15px;
  color: #FFF;
  margin-left: 20px;
`;

export const SignOutButton = styled.TouchableOpacity`
  border-radius: 4px;
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: rgba(255, 255, 255, 0.8);
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  padding: 12px;
`;

export const SignOutButtonText = styled.Text`
  font-size: 13px;
  color: #FFF;
  font-weight: bold;
`;
