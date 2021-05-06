import styled from 'styled-components';

export const Conteiner = styled.View`
    background-color: #F0F0F5;
    flex: 1;
`;

export const P = styled.Text`
    
`;

export const TitleInput = styled.TextInput`
    font-size: 22px;
    padding: 10px;
    margin: 5px;
    border-width: 1px;
    border-color: #CCC;
`;

export const BodyText = styled.TextInput`
    flex: 1;
    padding: 10px;
    font-size: 16px;
    color: #050508;
    margin: 5px;
    border-width: 1px;
    border-color: #CCC;
`;

export const SaveButton = styled.TouchableHighlight`
    margin-right: 15px;
`;

export const SaveImg = styled.Image`
    width: 25px;
    height: 25px;
`;

export const CloseButton = styled.TouchableHighlight`
    margin-left: 15px;
`;

export const CloseImg = styled.Image`
    width: 18px;
    height: 18px;
`;

export const Row = styled.ScrollView`
    flex-direction: row;
    margin-top: 5px;
`;

export const ContModal = styled.SafeAreaView`
    align-items: flex-start;
    margin: 10px;
`;

export const ButtomMin = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    border-radius: 50px;
    margin-left: 13px;
`;

export const NoteOptions = styled.TouchableOpacity`
    padding: 10px;
    margin: 5px;
    border-width: 1px;
    border-color: #CCC;
    align-items: center;
`;

export const TextButton = styled.Text`
    font-size: 15px;
    font-weight: bold;
    text-transform: uppercase;
`;