import styled from "styled-components/native";

export const ContainerLogin = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #161616;
`;
export const Logo = styled.View`
  padding-bottom: 20px;
`;
export const ImageLogo = styled.Image`
  weight: 120px;
  height: 120px;
`;

export const InputForm = styled.TextInput`
  background-color: #fff;
  width: 90%;
  margin-bottom: 15px;
  color: #222;
  font-size: 18px;
  border-radius: 6px;
  padding: 10px;
`;

export const BtnSubmitForm = styled.TouchableOpacity`
  background-color: #ebb105;
  width: 90%;
  height: 45px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`;

export const TxtSubmitForm = styled.Text`
  color: #fff;
  font-size: 22px;
`;

export const LinkNewUser = styled.Text`
  color: #fff;
  font-size: 18px;
  margin-top: 10px;
`;

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: #222;
`;
export const ContainerList = styled.SafeAreaView`
  flex: 1;
  padding: 15px;
  background-color: #fff;
  color: #222;
`;

export const LoadingArea = styled.View`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6)
  justify-content: center;
  align-items: center;
`;
