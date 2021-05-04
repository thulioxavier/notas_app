import styled from 'styled-components';

export const Conteiner = styled.View`
    flex:1;
    background-color: #F0F0F5;
    justify-content: center;
    align-items: center;
    padding: 10px;
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