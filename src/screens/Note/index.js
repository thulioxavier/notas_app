import React, { useLayoutEffect, createRef } from 'react';
import ActionSheet from "react-native-actions-sheet";
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';


import { Checked, Closed } from '../../constants/icons';
import { Conteiner, P, SaveButton, SaveImg, Row, ContModal, ButtomMin, NoteOptions, TitleInput, BodyText, TextButton, CloseButton, CloseImg } from './styles';

const actionSheetRef = createRef();

const Note = () => {
    const route = useRoute();
    const dispatch = useDispatch();
    const list = useSelector(state => state.notes.list);
    const navigation = useNavigation();


    const [title, setTitle] = React.useState('');
    const [body, setBody] = React.useState('');
    const [color, setColor] = React.useState('');
    const [type, setType] = React.useState('Nota');
    const [status, setStatus] = React.useState('new');

    React.useEffect(() => {
        if (route.params?.key != undefined && list[route.params.key]) {
            setStatus('edit');
            setTitle(list[route.params.key].title);
            setBody(list[route.params.key].body);
            setColor(list[route.params.key].color);

        }
    }, []);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: status == 'new' ? 'Nova Nota' : 'Editar Nota',
            headerLeft: () => (
                <CloseButton underlayColor="transparent" onPress={back} >
                    <CloseImg source={Closed} style={{ tintColor: '#F0F0F5' }} />
                </CloseButton>
            ),
            headerRight: () => (
                <SaveButton underlayColor="transparent" onPress={save}  >
                    <SaveImg source={Checked} style={{ tintColor: '#F0F0F5' }} />
                </SaveButton>
            )
        });
    }, [status, title, body, color, type]);

    const back = () => {
        navigation.goBack();
    }

    const save = () => {
        console.log(color);

        if (title != '' && body != '') {
            if (status == 'edit') {
                dispatch({
                    type: 'EDIT_NOTE',
                    payload: {
                        key: route.params.key,
                        title: title,
                        body: body,
                        color: color,
                        type: type,
                        date_end: null,
                    },
                });
            } else {
                dispatch({
                    type: 'ADD_NOTE',
                    payload: {
                        title: title,
                        body: body,
                        color: color,
                        type: type,
                        date_end: null,
                    },
                });
            }

            navigation.goBack();
        } else {
            alert('Preencha Título e/ou Corpo da sua Nota!!');
        }
    }

    const addColor = (col) => {
        setColor(col);
        actionSheetRef.current?.setModalVisible(false);
    }

    return (
        <Conteiner>
            <TitleInput
                placeholder="Título da Nota"
                onChangeText={e => setTitle(e)}
                value={title}
                autoFocus={true}
            />
            <BodyText
                placeholder="Corpo da Nota"
                multiline={true}
                textAlignVertical="top"
                value={body}
                onChangeText={e => setBody(e)}
            />
            <NoteOptions
                onPress={() => {
                    actionSheetRef.current?.setModalVisible(true);
                }}
            >
                <TextButton >OPÇÕES DA NOTA</TextButton>
            </NoteOptions>

            <ActionSheet ref={actionSheetRef}>
                <ContModal>
                    <P>Cor de marcação:</P>
                    <Row horizontal={true} showsHorizontalScrollIndicator={false}>
                        <ButtomMin style={{ backgroundColor: '#050508', marginLeft: 0 }} onPress={() => addColor('#050508')} />
                        <ButtomMin style={{ backgroundColor: '#CE1929' }} onPress={() => addColor('#CE1929')} />
                        <ButtomMin style={{ backgroundColor: '#386ED9' }} onPress={() => addColor('#386ED9')} />
                        <ButtomMin style={{ backgroundColor: '#007C49' }} onPress={() => addColor('#007C49')} />
                        <ButtomMin style={{ backgroundColor: '#E2520D' }} onPress={() => addColor('#E2520D')} />
                        <ButtomMin style={{ backgroundColor: '#DDA9C2' }} onPress={() => addColor('#DDA9C2')} />
                        <ButtomMin style={{ backgroundColor: '#F5BE0A' }} onPress={() => addColor('#F5BE0A')} />
                        <ButtomMin style={{ backgroundColor: '#3C1195' }} onPress={() => addColor('#3C1195')} />
                        <ButtomMin style={{ backgroundColor: '#361709' }} onPress={() => addColor('#361709')} />
                    </Row>
                </ContModal>
            </ActionSheet>
        </Conteiner>
    );
}

export default Note;