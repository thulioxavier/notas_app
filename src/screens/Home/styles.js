import styled from 'styled-components';

export const Conteiner = styled.View`
    flex:1;
    background-color: #F0F0F5;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;
export const P = styled.Text`
    
`;

export const AddButton =  styled.TouchableHighlight`
    margin-right: 15px;
`;
export const AddImg = styled.Image`
    width: 25px;
    height: 25px;
`;

export const NotesList = styled.FlatList`
    flex: 1;
    width: 100%;
`;

export const NoNotes = styled.View`
    justify-content: center;
    align-items: center;
`;

export const NoNotesImg = styled.Image`
    width: 300px;
    height: 300px;
    margin-bottom: 10px;
`;

export const NoNotesText = styled.Text`
    font-size: 16px;
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

export const Row = styled.View`
    margin-top: 5px;
    width: 100%;
`;

export const ContModal = styled.SafeAreaView`
    justify-content: center;
    align-items: center;
    margin: 10px;
`;

export const ButtomMin = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    border-radius: 50px;
    margin-left: 13px;
`;