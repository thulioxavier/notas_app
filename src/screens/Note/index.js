import React, { useLayoutEffect, createRef } from 'react';
import ActionSheet from "react-native-actions-sheet";
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import {TouchableOpacity} from 'react-native';

import { Checked } from '../../constants/icons';
import { Conteiner, P, SaveButton, SaveImg, Row, ContModal, ButtomMin, NoteOptions, TitleInput, BodyText, TextButton } from './styles';

const actionSheetRef = createRef();

const Note = () => {

    const [title, setTitle] = React.useState('');
    const [body, setBody] = React.useState('');

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <SaveButton underlayColor="transparent">
                    <SaveImg source={Checked} style={{tintColor: '#F0F0F5'}} />
                </SaveButton>
            )
        });
    }, [])

    return (
        <Conteiner>
            <TitleInput
                placeholder="Título da Nota"
                onChangeText={e=> setTitle(e)}
                value={title}
                autoFocus={true}
            />
            <BodyText
                placeholder="Corpo da Nota"
                multiline={true}
                textAlignVertical="top"
                value={body}
                onChangeText={e=> setBody(e)}
            />
                <NoteOptions
                    onPress={() => {
                        actionSheetRef.current?.setModalVisible();
                    }}
                >
                    <TextButton >OPÇÕES DA NOTA</TextButton>
                </NoteOptions>

                <ActionSheet ref={actionSheetRef}>
                    <ContModal>
                        <P>Cor de marcação:</P>
                        <Row horizontal={true} showsHorizontalScrollIndicator={false}>
                            <ButtomMin style={{backgroundColor: '#000', marginLeft: 0}}/>
                            <ButtomMin style={{backgroundColor: '#CE1929'}}/>
                            <ButtomMin style={{backgroundColor: '#386ED9'}}/>
                            <ButtomMin style={{backgroundColor: '#007C49'}}/>
                            <ButtomMin style={{backgroundColor: '#E2520D'}}/>
                            <ButtomMin style={{backgroundColor: '#DDA9C2'}}/>
                            <ButtomMin style={{backgroundColor: '#F5BE0A'}}/>
                            <ButtomMin style={{backgroundColor: '#3C1195'}}/>
                            <ButtomMin style={{backgroundColor: '#361709'}}/>
                        </Row>
                    </ContModal>
                </ActionSheet>
        </Conteiner>
    );
}

export default Note;